import unittest
from classes.guest import Guest
from classes.song import Song
from classes.room import Room


class TestGuest(unittest.TestCase):
    def setUp(self):
        self.song = Song("Psychosocial", "Slipknot")
        self.guest = Guest("Corey Taylor", 500, self.song)
        self.room = Room("Pewter", 10, 5)

    def test_has_name(self):
        self.assertEqual("Corey Taylor", self.guest.name)

    def test_has_cash(self):
        self.assertEqual(500, self.guest.cash)

    def test_has_favourite_song(self):
        self.assertEqual(self.song, self.guest.favourite_song)

    def test_spend_cash(self):
        self.guest.spend_cash(100)
        self.assertEqual(400, self.guest.cash)

    def test_can_afford_fee__true(self):
        self.assertEqual(True, self.guest.can_afford_fee(10))

    def test_can_afford_fee__false(self):
        self.assertEqual(False, self.guest.can_afford_fee(700))

    def test_hears_favourite_song__heard(self):
        self.room.add_song(self.song)
        heard_song = self.guest.hears_favourite_song(self.room.songs)
        self.assertEqual("OMG, I love this song!!!", heard_song)

    def test_hears_favourite_song__not_heard(self):
        song = Song("Through Glass", "Stone Sour")
        self.room.add_song(song)
        self.assertEqual(None, self.guest.hears_favourite_song(self.room.songs))

    def test_pay_tab__full(self):
        self.room.add_to_tab(self.guest, 50)
        self.guest.pay_tab(self.room.guest_tabs)
        self.assertNotIn(self.guest, self.room.guest_tabs)

    def test_pay_tab__partial(self):
        self.room.add_to_tab(self.guest, 750)
        self.guest.pay_tab(self.room.guest_tabs)
        self.assertEqual(250, self.room.guest_tabs[self.guest])
