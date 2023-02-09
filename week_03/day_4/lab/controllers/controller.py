from flask import render_template, request, redirect
from app import app
from models.event_list import events, Event, add_new_event


@app.route("/events")
def index():
    return render_template("index.html", title="Home", events=events)


@app.route("/events/new")
def event():
    return render_template("new.html", title="New Event")


@app.route("/events", methods=["POST"])
def add_event():
    event_title = request.form["title"]
    event_desc = request.form["description"]
    new_event = Event(event_title, event_desc, False)
    add_new_event(new_event)
    return redirect("/events")
