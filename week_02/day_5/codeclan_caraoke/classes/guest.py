class Guest:
    def __init__(self, name, cash, favourite_song):
        self.name = name
        self.cash = cash
        self.favourite_song = favourite_song

    def spend_cash(self, amount):
        self.cash -= amount

    def can_afford_fee(self, amount):
        return self.cash >= amount
