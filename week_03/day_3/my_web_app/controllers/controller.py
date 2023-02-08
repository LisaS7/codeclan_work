from app import app


@app.route("/")
def index():
    return "Hello Alec!"


@app.route("/greet/<name>")
def greet(name):
    return f"Hello {name}"


@app.route("/news")
def news():
    return "This is the news page"
