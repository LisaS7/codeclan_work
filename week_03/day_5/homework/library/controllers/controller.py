from app import app
from flask import render_template, redirect, request
from models.library import all_books, add_book_to_library, remove_book
from models.book import Book
from pathlib import Path


def save_image(image):
    if not image:
        image = "none.jpeg"
    else:
        image.save(Path("./static/images/book_covers") / image.filename)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/", methods=["POST"])
def add_book():
    title = request.form["title"]
    author = request.form["author"]
    genre = request.form["genre"]

    image = request.files["image"]
    save_image(image)

    book = Book(title, author, genre, image.filename)
    add_book_to_library(book)

    return redirect("/all-books")


@app.route("/all-books")
def list_books():
    return render_template("all_books.html", books=all_books)


@app.route("/book/<index>")
def single_book(index):
    index = int(index)
    return render_template("single_book.html", book=all_books[index], index=index)


@app.route("/book/new")
def new_book():
    return render_template("add_book.html")


@app.route("/book/delete/<index>")
def delete_book(index):
    book = all_books[int(index)]
    remove_book(book)
    return redirect("/all-books")


@app.route("/book/checkout/<index>")
def toggle_checkout(index):
    book = all_books[int(index)]
    book.toggle_checkout()
    return redirect(request.referrer)
