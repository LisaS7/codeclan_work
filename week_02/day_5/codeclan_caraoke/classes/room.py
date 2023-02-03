class Room:
    def __init__(self, name):
        self.name = name
        self.guests = []
        self.songs = []

    def check_in(self, guest):
        self.guests.append(guest)

    def check_out(self, guest):
        self.guests.remove(guest)
