from models.book import Book

book1 = Book("Clean Code", "Robert C Martin", "Programming")
book2 = Book("The Pragmatic Programmer", "Andrew Hunt, David Thomas", "Programming")
book3 = Book("V For Vendetta", "Alan Moore", "Graphic Novel")
book4 = Book("Batman: The Long Halloween", "Jeph Loeb", "Graphic Novel")

all_books = [book1, book2, book3, book4]


def add_book(book):
    all_books.append(book)


def remove_book(book):
    all_books.remove(book)
