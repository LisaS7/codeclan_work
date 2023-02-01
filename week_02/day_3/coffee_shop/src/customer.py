class Customer:
    def __init__(self, name, wallet, age):
        self.name = name
        self.wallet = wallet
        self.age = age
        self.energy = 0

    def reduce_wallet(self, amount):
        self.wallet -= amount

    def buy_drink(self, price, caffeine_level, coffee_shop):
        if self.is_over_16() and self.check_energy_level():
            self.reduce_wallet(price)
            coffee_shop.increase_till(price)
            self.increase_energy_level(caffeine_level)

    def is_over_16(self):
        return self.age >= 16

    def check_energy_level(self):
        return self.energy < 50

    def increase_energy_level(self, caffeine_level):
        self.energy += caffeine_level

    def buy_food(self, reju_level):
        self.energy -= reju_level
