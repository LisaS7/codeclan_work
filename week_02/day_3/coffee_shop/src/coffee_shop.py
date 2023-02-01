class CoffeeShop:
    def __init__(self, name, till, drinks):
        self.name = name
        self.till = till
        self.drinks = drinks

    def increase_till(self, amount):
        self.till += amount

    def stock_total(self):
        # stock_total = 0
        # for drink in self.drinks:
        #     stock_total = drink.value()
        # return stock_total
        return sum(self.drinks.values())
