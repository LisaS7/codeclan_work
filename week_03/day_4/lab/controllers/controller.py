from flask import render_template, request, redirect
from app import app
from models.event_list import events, Event, add_new_event


@app.route("/events")
def index():
    return render_template("index.html", title="Home", events=events)


@app.route("/events/new")
def new_event():
    return render_template("new.html", title="New Event")


@app.route("/events", methods=["POST"])
def add_event():
    event_date = request.form["date"]
    event_title = request.form["title"]
    event_number_of_guests = request.form["number_of_guests"]
    event_room = request.form["room"]
    event_description = request.form["description"]
    new_event = Event(
        event_date,
        event_title,
        event_number_of_guests,
        event_room,
        event_description,
        False,
    )
    add_new_event(new_event)
    return redirect("/events")
