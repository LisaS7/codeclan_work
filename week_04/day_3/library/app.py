from flask import Flask

app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = "/static/images/book_covers"

from controllers import book_controller

if __name__ == "__main__":
    app.run(debug=True)
