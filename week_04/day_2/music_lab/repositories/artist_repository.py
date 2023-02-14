from db.run_sql import run_sql
from models.artist import Artist
from models.album import Album


def save(artist):
    sql = "INSERT INTO artists (name) VALUES (%s) RETURNING *"
    values = [artist.name]
    result = run_sql(sql, values)
    artist.id = result[0]["id"]


def select_all():
    artists = []

    sql = "SELECT * FROM artists"

    results = run_sql(sql)
    for row in results:
        artist = Artist(row["name"], row["id"])
        artists.append(artist)
    return artists


def select(id):
    sql = "SELECT * FROM artists WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)

    if results:
        result = results[0]
        artist = Artist(result["name"], result["id"])
        return artist


def delete_all():
    sql = "DELETE FROM artists"
    run_sql(sql)


def delete(id):
    sql = "DELETE FROM artists WHERE id = %s"
    values = [id]
    run_sql(sql, values)


def update(artist):
    sql = "UPDATE artists SET name = %s WHERE id = %s"
    values = [artist.name, artist.id]
    run_sql(sql, values)


def albums(artist):
    albums = []

    sql = "SELECT * FROM albums WHERE artist_id = %s"
    values = [artist.id]
    results = run_sql(sql, values)

    for result in results:
        task = Album(
            result["title"],
            result["genre"],
            artist,
            result["id"],
        )
        albums.append(task)

    return albums
