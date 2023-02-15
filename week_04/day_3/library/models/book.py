class Book:
    def __init__(self, title, author, genre, publisher, page_count, image, checked_out = False):
        self.title = title
        self.author = author
        self.genre = genre
        self.publisher = publisher
        self.page_count = page_count
        self.image = image
        self.checked_out = False

    def __repr__(self):
        return f"{self.title}\n{self.author.name}\n"

    def toggle_checkout(self):
        self.checked_out = not self.checked_out
