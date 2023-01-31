class PetShop:
    def __init__(self, name, pets, cash):
        self.name = name
        self.pets = pets
        self.total_cash = cash
        self.pets_sold = 0

    def stock_count(self):
        return len(self.pets)

    def increase_pets_sold(self):
        self.pets_sold += 1

    def increase_total_cash(self, amount):
        self.total_cash += amount

    def remove_pet(self, pet):
        self.pets.remove(pet)

    def find_pet_by_name(self, name):
        for pet in self.pets:
            if pet.name == name:
                return pet

    def sell_pet_to_customer(self, name, customer):
        pet = self.find_pet_by_name(name)
        self.remove_pet(pet)
        self.increase_pets_sold()
        self.increase_total_cash(pet.price)
        customer.reduce_cash(pet.price)
        customer.add_pet(pet)
