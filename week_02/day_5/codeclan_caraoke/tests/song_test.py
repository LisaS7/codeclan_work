import unittest
from classes.song import Song


class TestSong(unittest.TestCase):
    def setUp(self):
        self.song = Song("American Pie", "Don Mclean")

    def test_has_title(self):
        self.assertEqual("American Pie", self.song.title)

    def test_has_artist(self):
        self.assertEqual("Don Mclean", self.song.artist)
