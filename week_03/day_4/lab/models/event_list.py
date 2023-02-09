from models.event import *
from datetime import datetime

event1 = Event(
    datetime(2023, 5, 10), "Birthday party", 28, "Room1", "Frank's 70th birthday", True
)
event2 = Event(
    datetime(2023, 8, 23), "PyCon", 150, "Conference Room", "Python Conference", True
)
events = [event1, event2]


def add_new_event(event):
    events.append(event)


def delete_event(index):
    events.pop(index)
