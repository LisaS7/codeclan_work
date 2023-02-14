from db.run_sql import run_sql

from models.task import Task


def select_all():
    tasks = []

    sql = "SELECT * FROM tasks"
    results = run_sql(sql)

    for row in results:
        task = Task(
            row["description"],
            row["assignee"],
            row["duration"],
            row["completed"],
            row["id"],
        )
        tasks.append(task)
    return tasks


def select(id):
    sql = "SELECT * FROM tasks WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)

    if results:
        result = results[0]
        task = Task(
            result["description"],
            result["assignee"],
            result["duration"],
            result["completed"],
            result["id"],
        )
        return task


def delete_all():
    sql = "DELETE FROM tasks"
    run_sql(sql)


def delete(id):
    sql = "DELETE FROM tasks WHERE id = %s"
    values = [id]
    run_sql(sql, values)


def save(task):
    sql = """INSERT INTO tasks (description, assignee, duration, completed) 
            VALUES (%s, %s, %s, %s) RETURNING *"""
    values = [task.description, task.assignee, task.duration, task.completed]
    result = run_sql(sql, values)
    task.id = result[0]["id"]


def update(task):
    sql = """UPDATE tasks SET (description, assignee, duration, completed) = (%s, %s, %s, %s) WHERE id = %s"""
    values = [task.description, task.assignee, task.duration, task.completed, task.id]
    run_sql(sql, values)
