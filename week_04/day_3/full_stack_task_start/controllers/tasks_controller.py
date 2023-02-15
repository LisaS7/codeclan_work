from flask import Flask, render_template, request, redirect
from repositories import task_repository, user_repository
from models.task import Task

from flask import Blueprint

tasks_blueprint = Blueprint("tasks", __name__)

# RESTful CRUD Routes

# INDEX
# GET '/tasks'
@tasks_blueprint.route("/tasks", methods=["GET", "POST"])
def tasks():
    if request.method == "POST":
        description = request.form["description"]
        user_id = request.form["user_id"]
        duration = request.form["duration"]
        completed = request.form["completed"]

        user = user_repository.select(user_id)
        task = Task(description, user, duration, completed)
        task_repository.save(task)
        return redirect("/tasks")

    tasks = task_repository.select_all()
    return render_template("tasks/index.html", all_tasks=tasks)


# NEW
# GET '/tasks/new'
@tasks_blueprint.route("/tasks/new")
def new_task():
    users = user_repository.select_all()
    return render_template("tasks/new.html", all_users=users)


# CREATE
# POST '/tasks'

# SHOW
# GET '/tasks/<id>'

# EDIT
# GET '/tasks/<id>/edit'

# UPDATE
# PUT '/tasks/<id>'

# DELETE
# DELETE '/tasks/<id>'
