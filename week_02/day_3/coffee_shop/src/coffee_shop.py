class CoffeeShop:
    def __init__(self, name, till):
        self.name = name
        self.till = till

    def increase_till(self, amount):
        self.till += amount
