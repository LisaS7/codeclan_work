import unittest
from models.artist import Artist


class TestArtist(unittest.TestCase):
    def setUp(self):
        self.artist = Artist("Stone Sour")

    def test_artist_has_name(self):
        self.assertEqual(self.artist.name, "Stone Sour")
