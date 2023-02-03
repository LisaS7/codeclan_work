class Room:
    def __init__(self, name, capacity, entry_fee):
        self.name = name
        self.guests = []
        self.songs = []
        self.capacity = capacity
        self.entry_fee = entry_fee

    def check_in(self, guest):
        if self.room_has_space() and guest.can_afford_fee(self.entry_fee):
            guest.spend_cash(self.entry_fee)
            self.guests.append(guest)
            return guest.hears_favourite_song(self)

    def check_out(self, guest):
        self.guests.remove(guest)

    def number_of_guests(self):
        return len(self.guests)

    def room_has_space(self):
        return self.number_of_guests() < self.capacity

    def add_song(self, song):
        self.songs.append(song)
