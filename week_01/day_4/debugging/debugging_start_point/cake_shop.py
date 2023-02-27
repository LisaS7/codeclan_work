cakes = [
    {
      "name": "Brownie",
      "ingredients":[ "chocolate", "cocoa powder", "flour", "eggs", "sugar", "butter" ],
      "rating": 5
    },
    {
      "name": "Carrot Cake",
      "ingredients":[ "carrots", "raisins", "cinnamon", "flour", "eggs", "sugar", "butter" ],
      "rating": 2.5
    },
    {
      "name": "Lemon Drizzle",
      "ingredients":[ "lemon juice", "flour", "eggs", "sugar", "butter" ],
      "rating": 1.5
    }
]

def get_average_rating(cakes):
    ratings = []

    for cake in cakes:
        ratings.append(cake["rating"])

        ratings_total = sum(ratings)
        number_of_cakes = len(cakes)
        average = ratings_total / number_of_cakes

        return average

print(get_average_rating(cakes))
