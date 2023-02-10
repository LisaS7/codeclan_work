from app import app
from flask import render_template, redirect
from models.library import all_books, add_book, remove_book


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/all-books")
def list_books():
    return render_template("all_books.html", books=all_books)


@app.route("/book/<index>")
def single_book(index):
    index = int(index)
    return render_template("single_book.html", book=all_books[index], index=index)


@app.route("/book/delete/<index>")
def delete_book(index):
    book = all_books[int(index)]
    remove_book(book)
    return redirect("/all-books")
