import unittest
from classes.room import Room
from classes.guest import Guest
from classes.song import Song


class TestRoom(unittest.TestCase):
    def setUp(self):
        self.room = Room("Ash")
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

    def test_check_in_guest(self):
        self.room.check_in(self.guest1)
        self.assertEqual(self.guest1, self.room.guests[0])

    def test_check_out_guest(self):
        self.room.check_in(self.guest1)
        self.room.check_in(self.guest2)
        self.room.check_out(self.guest1)
        self.assertEqual(self.guest2, self.room.guests[0])
