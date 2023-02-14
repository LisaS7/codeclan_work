import unittest
from models.album import Album
from models.artist import Artist


class TestAlbum(unittest.TestCase):
    def setUp(self):
        self.artist = Artist("Stone Sour")
        self.album = Album("Come What(ever) May", "Metal", self.artist)

    def test_has_title(self):
        self.assertEqual("Come What(ever) May", self.album.title)

    def test_has_genre(self):
        self.assertEqual("Metal", self.album.genre)

    def test_has_artist(self):
        self.assertEqual(self.artist, self.album.artist)
