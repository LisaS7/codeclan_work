def greet(name, time_of_day):
    return "Good" + time_of_day + ", " + name + "!"


print(greet("Spock", "morning"))


chickens = [
    {"name": "Margaret", "age": 2, "eggs": 0},
    {"name": "Hetty", "age": 1, "eggs": 2},
    {"name": "Henrietta", "age": 3, "eggs": 1},
    {"name": "Audrey", "age": 2, "eggs": 0},
    {"name": "Mabel", "age": 5, "eggs": 1},
]


def collect_eggs(chicken_list):
    total_eggs = 0
    for chicken in chicken_list:
        total_eggs += chicken["eggs"]
        chicken["eggs"] = 0  # eggs have been collected

    return total_eggs


egg_count = collect_eggs(chickens)

print(f"{egg_count} eggs collected")
