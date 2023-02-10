from models.book import Book

all_books = []


def add_book(book):
    all_books.append(book)


def remove_book(book):
    all_books.remove(book)
