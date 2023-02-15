from flask import Flask, render_template, request, redirect
from repositories import task_repository, user_repository
from models.task import Task

from flask import Blueprint

tasks_blueprint = Blueprint("tasks", __name__)

# RESTful CRUD Routes

# INDEX
# GET '/tasks' # POST '/tasks'
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


# SHOW
# GET '/tasks/<id>'
@tasks_blueprint.route("/tasks/<id>")
def show_task(id):
    task = task_repository.select(id)
    return render_template("tasks/show.html", task=task)


# EDIT
# GET '/tasks/<id>/edit'
# UPDATE
# PUT '/tasks/<id>'
@tasks_blueprint.route("/tasks/edit/<id>", methods=["GET", "POST"])
def edit_task(id):
    if request.method == "POST":
        description = request.form["description"]
        user_id = request.form["user_id"]
        duration = request.form["duration"]
        completed = request.form["completed"]

        user = user_repository.select(user_id)
        task = Task(description, user, duration, completed, id)
        task_repository.update(task)
        return redirect("/tasks")
    users = user_repository.select_all()
    task = task_repository.select(id)
    return render_template("tasks/edit.html", all_users=users, task=task)


# DELETE
# DELETE '/tasks/<id>'
@tasks_blueprint.route("/tasks/delete/<id>", methods=["POST"])
def delete_task(id):
    task_repository.delete(id)
    return redirect("/tasks")
