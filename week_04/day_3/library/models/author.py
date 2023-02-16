class Author:
    def __init__(self, name, id=None):
        self.id = id
        self.name = name

    def __repr__(self):
        return f"{self.id - self.name}"