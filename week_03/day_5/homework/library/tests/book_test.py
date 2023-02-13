import unittest
from models.book import Book


class TestBook(unittest.TestCase):
    def setUp(self):
        self.book = Book("1984", "George Orwell", "Political", "1984_cover.jpeg")

    def test_book_has_title(self):
        self.assertEqual(self.book.title, "1984")

    def test_book_has_author(self):
        self.assertEqual(self.book.author, "George Orwell")

    def test_book_has_genre(self):
        self.assertEqual(self.book.genre, "Political")

    def test_book_has_image(self):
        self.assertEqual(self.book.image, "1984_cover.jpeg")

    def test_book_checkout__check_in(self):
        self.book.toggle_checkout()
        self.assertEqual(self.book.checked_out, True)

    def test_book_checkout__check_out(self):
        self.book.checked_out = True
        self.book.toggle_checkout()
        self.assertEqual(self.book.checked_out, False)
