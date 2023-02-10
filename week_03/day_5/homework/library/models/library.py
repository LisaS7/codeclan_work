from models.book import Book

book1 = Book("Clean Code", "Robert C Martin", "Programming", "clean_code.jpeg")
book2 = Book(
    "The Pragmatic Programmer",
    "Andrew Hunt, David Thomas",
    "Programming",
    "pragmatic-programmer.jpeg",
)
book3 = Book("V For Vendetta", "Alan Moore", "Graphic Novel", "v_for_vendetta.jpeg")
book4 = Book(
    "Batman: The Long Halloween",
    "Jeph Loeb",
    "Graphic Novel",
    "batman_the_long_halloween.jpeg",
)

all_books = [book1, book2, book3, book4]


def add_book(book):
    all_books.append(book)


def remove_book(book):
    all_books.remove(book)
