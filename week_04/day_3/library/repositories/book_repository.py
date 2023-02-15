from db.run_sql import run_sql

from models.book import Book
from repositories import author_repository


def save(book):
    sql = """INSERT INTO books (title, author_id, genre, publisher, page_count, image, checked_out)
            VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING *"""
    values = [
        book.title,
        book.author.id,
        book.genre,
        book.publisher,
        book.page_count,
        book.image,
        book.checked_out,
    ]
    results = run_sql(sql, values)
    id = results[0]["id"]
    book.id = id
    return book


def select_all():
    books = []

    sql = "SELECT * FROM books"
    results = run_sql(sql)

    for row in results:
        author = author_repository.select(row["author_id"])
        book = Book(
            row["title"],
            author,
            row["genre"],
            row["publisher"],
            row["page_count"],
            row["image"],
            row["checked_out"]
        )
        books.append(book)
    return books

def delete_all():
    sql = "DELETE FROM books"
    run_sql(sql)
