from models.book import Book
from models.author import Author

from repositories import author_repository, book_repository

book_repository.delete_all()
author_repository.delete_all()

author1 = Author("Robert C Martin")
author_repository.save(author1)
author2 = Author("Alan Moore")
author_repository.save(author2)
author3 = Author("Jeph Loeb")
author_repository.save(author3)

book1 = Book(
    "Clean Code",
    author1,
    "Programming",
    "Pearson Education",
    464,
    "clean_code.jpeg",
)
book_repository.save(book1)
book2 = Book(
    "V For Vendetta",
    author2,
    "Graphic Novel",
    "Quality Communications",
    296,
    "v_for_vendetta.jpeg",
)
book_repository.save(book2)
book3 = Book(
    "Batman: The Long Halloween",
    author3,
    "Graphic Novel",
    "DC Comics",
    384,
    "batman_the_long_halloween.jpeg",
)
book_repository.save(book3)

for author in author_repository.select_all():
    print(author)
# save books
