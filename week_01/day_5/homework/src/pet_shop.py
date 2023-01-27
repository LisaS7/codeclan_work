def get_pet_shop_name(pet_shop):
    return pet_shop["name"]


def get_total_cash(pet_shop):
    return pet_shop["admin"]["total_cash"]


def add_or_remove_cash(pet_shop, amount):
    pet_shop["admin"]["total_cash"] += amount


def get_pets_sold(pet_shop):
    return pet_shop["admin"]["pets_sold"]


def increase_pets_sold(pet_shop, number):
    pet_shop["admin"]["pets_sold"] += number


def get_stock_count(pet_shop):
    return len(pet_shop["pets"])


def get_pets_by_breed(pet_shop, breed):
    pets = pet_shop["pets"]
    return [pet for pet in pets if pet["breed"] == breed]


def find_pet_by_name(pet_shop, name):
    pets = pet_shop["pets"]
    found_pet = None
    for pet in pets:
        if pet["name"] == name:
            found_pet = pet
    return found_pet


def remove_pet_by_name(pet_shop, name):
    remove_pet = find_pet_by_name(pet_shop, name)
    pet_shop["pets"].remove(remove_pet)


def add_pet_to_stock(pet_shop, new_pet):
    pet_shop["pets"].append(new_pet)


def get_customer_cash(customer):
    return customer["cash"]


def remove_customer_cash(customer, amount):
    customer["cash"] -= amount


def get_customer_pet_count(customer):
    return len(customer["pets"])


def add_pet_to_customer(customer, pet):
    customer["pets"].append(pet)


def customer_can_afford_pet(customer, pet):
    customer_cash = get_customer_cash(customer)
    pet_cost = pet["price"]
    return customer_cash >= pet_cost


def sell_pet_to_customer(pet_shop, pet, customer):
    if pet and customer_can_afford_pet(customer, pet):
        pet_price = pet["price"]
        add_pet_to_customer(customer, pet)
        remove_customer_cash(customer, pet_price)
        add_or_remove_cash(pet_shop, pet_price)
        remove_pet_by_name(pet_shop, pet["name"])
        increase_pets_sold(pet_shop, 1)
