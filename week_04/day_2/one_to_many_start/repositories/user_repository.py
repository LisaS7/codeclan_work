from db.run_sql import run_sql

from models.task import Task
from models.user import User


def save(user):
    sql = """INSERT INTO users (first_name, last_name) VALUES (%s, %s) RETURNING *"""
    values = [user.first_name, user.last_name]
    result = run_sql(sql, values)
    user.id = result[0]["id"]


def select_all():
    users = []

    sql = "SELECT * FROM users"
    results = run_sql(sql)

    for row in results:
        user = User(row["first_name"], row["last_name"], row["id"])
        users.append(user)
    return users


def select(id):
    user = None
    sql = "SELECT * FROM users WHERE id = %s"
    values = [id]
    result = run_sql(sql, values)[0]

    if result is not None:
        user = User(result["first_name"], result["last_name"], result["id"])
    return user


def delete_all():
    sql = "DELETE  FROM users"
    run_sql(sql)


def delete(id):
    sql = "DELETE  FROM users WHERE id = %s"
    values = [id]
    run_sql(sql, values)


def update(user):
    sql = "UPDATE users SET (first_name, last_name) = (%s, %s) WHERE id = %s"
    values = [user.first_name, user.last_name, user.id]
    run_sql(sql, values)


def tasks(user):
    tasks = []
    sql = "SELECT * FROM tasks WHERE user_id = %s"
    values = [user.id]
    results = run_sql(sql, values)

    for result in results:
        task = Task(
            result["description"],
            user,
            result["duration"],
            result["completed"],
            result["id"],
        )
        tasks.append(task)

    return tasks
