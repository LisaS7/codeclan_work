import unittest
from classes.room import Room
from classes.guest import Guest
from classes.song import Song


class TestRoom(unittest.TestCase):
    def setUp(self):
        self.room = Room("Ash", 5, 10)
        self.song1 = Song("Before I Forget", "Slipknot")
        self.song2 = Song("The Unforgiven", "Metallica")
        self.guest1 = Guest("Corey Taylor", 200, self.song1)
        self.guest2 = Guest("James Hetfield", 100, self.song2)

    def test_has_name(self):
        self.assertEqual("Ash", self.room.name)

    def test_has_empty_guest_list(self):
        self.assertEqual([], self.room.guests)

    def test_has_empty_song_list(self):
        self.assertEqual([], self.room.songs)

    def test_has_entry_fee(self):
        self.assertEqual(10, self.room.entry_fee)

    def test_check_in_guest__capacity_success(self):
        self.room.check_in(self.guest1)
        self.assertIn(self.guest1, self.room.guests)

    def test_check_in_guest__capacity_fail(self):
        for _ in range(5):
            self.room.check_in(self.guest1)
        self.room.check_in(self.guest2)
        self.assertNotIn(self.guest2, self.room.guests)

    def test_check_in_guest__can_afford(self):
        self.room.check_in(self.guest1)
        self.assertIn(self.guest1, self.room.guests)

    def test_check_in_guest__cant_afford(self):
        guest = Guest("Dave Grohl", 2, self.song2)
        self.room.check_in(guest)
        self.assertNotIn(guest, self.room.guests)

    def test_check_in_guest__heard_favourite_song(self):
        self.room.add_song(self.song1)
        message = self.room.check_in(self.guest1)
        self.assertEqual("OMG, I love this song!!!", message)

    def test_check_out_guest(self):
        self.room.check_in(self.guest1)
        self.room.check_in(self.guest2)
        self.room.check_out(self.guest1)
        self.assertEqual(1, self.room.number_of_guests())

    def test_number_of_guests(self):
        self.room.check_in(self.guest1)
        self.room.check_in(self.guest2)
        self.assertEqual(2, self.room.number_of_guests())

    def test_room_has_space__true(self):
        self.room.check_in(self.guest1)
        self.room.check_in(self.guest2)
        self.assertEqual(True, self.room.room_has_space())

    def test_room_has_space__false(self):
        for _ in range(5):
            self.room.check_in(self.guest1)
        self.assertEqual(False, self.room.room_has_space())

    def test_add_song(self):
        self.room.add_song(self.song1)
        self.assertIn(self.song1, self.room.songs)
