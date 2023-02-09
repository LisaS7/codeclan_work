from flask import render_template
from app import app
from models.todo_list import tasks


@app.route("/tasks")
def index():
    return render_template("index.html", title="Home", tasks=tasks)


@app.route("/tasks/new")
def new_task():
    return render_template("new.html")
