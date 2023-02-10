class Book:
    def __init__(self, title, author, genre, image):
        self.title = title
        self.author = author
        self.genre = genre
        self.image = image
        self.checked_out = False

    def toggle_checkout(self):
        self.checked_out = not self.checked_out
