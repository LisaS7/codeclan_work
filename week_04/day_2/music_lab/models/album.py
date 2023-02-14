class Album:
    def __init__(self, title, genre, artist, id=None):
        self.id = id
        self.title = title
        self.genre = genre
        self.artist = artist

    def __repr__(self):
        return f"id: {self.id}, title: {self.title}, genre: {self.genre}, artist: {self.artist.name}"
