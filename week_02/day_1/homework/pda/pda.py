favourite_colours = ["green", "grey", "blue"]


def add_colour(list, colour):
    list.append(colour)


add_colour(favourite_colours, "charcoal")

print(favourite_colours)

# 1) The use of lists
# To collect related data into a single object

# 2) The code submitted
# It creates a list of strings called "favourite_colours". It then defines a function which can add another colour
# to the list. Then it calls this function and uses it to add the colour "charcoal".


animal = {"species": "dog", "name": "spike", "age": 5}


def increase_age(animal):
    animal["age"] += 1


increase_age(animal)


print(animal)

# 1) The use of dictionaries
# To store data in key, value pairs

# 2) The code submitted
# The code creates a dictionary with the details of one animal. It then defines a function which can increase the
# age of the animal. It then calls this function and the age is increased from 5 to 6.
