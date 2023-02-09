from flask import render_template, request, redirect
from app import app
from models.event_list import events, Event, add_new_event, delete_event
from datetime import datetime


@app.route("/events")
def index():
    return render_template("index.html", title="Home", events=events)


@app.route("/events/new")
def new_event():
    return render_template("new.html", title="New Event")


@app.route("/events", methods=["POST"])
def add_event():
    event_date = request.form["date"]
    year, month, day = map(int, event_date.split("-"))
    formatted_date = datetime(year, month, day)
    event_title = request.form["title"]
    event_number_of_guests = request.form["number_of_guests"]
    event_room = request.form["room"]
    event_description = request.form["description"]
    event_recurring = False
    if request.form.get("recurring"):
        event_recurring = True
    new_event = Event(
        formatted_date,
        event_title,
        event_number_of_guests,
        event_room,
        event_description,
        event_recurring,
    )
    add_new_event(new_event)
    return redirect("/events")


@app.route("/events/delete/<event>", methods=["POST"])
def delete(event):
    print(f"+++++++++++++++{request.form}")
    index_to_delete = int(request.form["delete"])
    delete_event(index_to_delete)
    return redirect("/events")
