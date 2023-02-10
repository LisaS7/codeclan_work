from app import app
from flask import render_template
from models.library import all_books, add_book, remove_book


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/all-books")
def list_books():
    return render_template("all_books.html", books=all_books)


@app.route("/book/<index>")
def single_book(index):
    return render_template("single_book.html", book=all_books[index])
