from flask import render_template # ADDED
from app import app
from models.todo_list import tasks

@app.route('/tasks')
def index():
    return render_template('index.html', title='Home', tasks=tasks)