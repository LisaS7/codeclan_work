from models.event import *
from datetime import datetime

event1 = Event(
    datetime(2023, 5, 10), "Birthday party", 28, "Room1", "Frank's 70th birthday", True
)
event2 = Event(
    datetime(2023, 6, 3), "Knitting Workshop", 7, "Room2", "Beginner class", False
)
event3 = Event(
    datetime(2023, 8, 23), "PyCon", 150, "Conference Room", "Python Conference", True
)

event4 = Event(
    datetime(2023, 12, 15), "Xmas Party", 12, "Restaurant", "Turkey and stuff", False
)
events = [event1, event2, event3, event4]


def add_new_event(event):
    events.append(event)


def delete_event(index):
    events.pop(index)
