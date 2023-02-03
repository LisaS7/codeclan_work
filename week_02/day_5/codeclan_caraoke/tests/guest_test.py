import unittest
from classes.guest import Guest
from classes.song import Song


class TestGuest(unittest.TestCase):
    def setUp(self):
        self.song = Song("Before I Forget", "Slipknot")
        self.guest = Guest("Corey Taylor", 500, self.song)

    def test_has_name(self):
        self.assertEqual("Corey Taylor", self.guest.name)

    def test_has_cash(self):
        self.assertEqual(500, self.guest.cash)

    def test_has_favourite_song(self):
        self.assertEqual(self.song, self.guest.favourite_song)

    def test_spend_cash(self):
        self.guest.spend_cash(100)
        self.assertEqual(400, self.guest.cash)
