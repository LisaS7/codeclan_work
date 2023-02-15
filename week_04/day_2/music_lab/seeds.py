import pdb

from models.album import Album
from models.artist import Artist
import repositories.album_repository as album_repository
import repositories.artist_repository as artist_repository

album_repository.delete_all()
artist_repository.delete_all()

artist1 = Artist("Stone Sour")
artist2 = Artist("Slipknot")
artist_repository.save(artist1)
artist_repository.save(artist2)


album1 = Album("Come What(ever) May", "Metal", artist1)
album2 = Album("Hydrograd", "Metal", artist1)
album3 = Album("Iowa", "Metal", artist2)
album4 = Album("The End, So Far", "Metal", artist2)
album_repository.save(album1)
album_repository.save(album2)
album_repository.save(album3)
album_repository.save(album4)


# pdb.set_trace()
# for album in artist_repository.albums(artist1):
#     print(album)

for artist in artist_repository.select_all():
    print(artist)

# for album in album_repository.select_all():
#     print(album)


artist_1 = Artist("Stone Sour")
artist_2 = Artist("Stone Sour")

print((artist_1 == artist_2))
