# my_number = 5
# value = int(input("What number am I thinking? "))

# while (value != my_number):
#     if (value > my_number):
#         print("Too high!")
#     else:
#         print("Too low!")
#     value = int(input("Guess again.... "))

chickens = [
    {"name": "Margaret", "age": 2, "eggs": 0},
    {"name": "Hetty", "age": 1, "eggs": 2},
    {"name": "Henrietta", "age": 3, "eggs": 1},
    {"name": "Audrey", "age": 2, "eggs": 0},
    {"name": "Mabel", "age": 5, "eggs": 1},
]

total_eggs = 0
for chick in chickens:
    total_eggs += chick["eggs"]
    chick["eggs"] = 0
