from classes.room import Room
from classes.guest import Guest
from classes.song import Song

room = Room("Ash", 5, 10)
song1 = Song("Before I Forget", "Slipknot")
song2 = Song("The Unforgiven", "Metallica")
guest1 = Guest("Corey Taylor", 200, song1)
guest2 = Guest("James Hetfield", 100, song2)

# room.check_in(guest1)
# room.check_in(guest2)

# [print(guest.name) for guest in room.guests]

room.add_to_tab(guest1, 70)
room.add_to_tab(guest2, 45)

for guest, amount in room.guest_tabs.items():
    print(f"{guest.name} owes {amount}")
