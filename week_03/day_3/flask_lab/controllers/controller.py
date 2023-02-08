from app import app
from flask import render_template
from models.orders import orders


@app.route("/orders")
def orders_index():
    return render_template("index.html", orders=orders)
