class Customer:
    def __init__(self, name, cash):
        self.name = name
        self.cash = cash
        self.pets = []

    def reduce_cash(self, amount):
        self.cash -= amount

    def pet_count(self):
        return len(self.pets)

    def add_pet(self, pet):
        self.pets.append(pet)

    def get_total_value_of_pets(self):
        return sum([pet.price for pet in self.pets])
