class Room:
    def __init__(self, name, capacity, entry_fee):
        self.name = name
        self.guests = []
        self.songs = []
        self.capacity = capacity
        self.entry_fee = entry_fee

    def check_in(self, guest):
        if self.room_has_space():
            self.guests.append(guest)

    def check_out(self, guest):
        self.guests.remove(guest)

    def number_of_guests(self):
        return len(self.guests)

    def room_has_space(self):
        return self.number_of_guests() < self.capacity

    def add_song(self, song):
        self.songs.append(song)
