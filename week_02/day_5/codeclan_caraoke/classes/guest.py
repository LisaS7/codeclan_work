class Guest:
    def __init__(self, name, cash, favourite_song):
        self.name = name
        self.cash = cash
        self.favourite_song = favourite_song
        self.food_ordered = []

    def spend_cash(self, amount):
        self.cash -= amount

    def can_afford(self, amount):
        return self.cash >= amount

    def hears_favourite_song(self, songs):
        if self.favourite_song in songs:
            return "OMG, I love this song!!!"

    def pay_tab(self, guest_tabs):
        if self in guest_tabs:
            tab = guest_tabs[self]

            amount_to_pay = min(tab, self.cash)
            self.spend_cash(amount_to_pay)
            guest_tabs[self] -= amount_to_pay

            if guest_tabs[self] == 0:
                guest_tabs.pop(self)

    def buy_snack(self, snack, on_tab=False, room=None):
        if self.can_afford(snack.price):
            self.food_ordered.append(snack)
            if on_tab:
                room.add_to_tab(self, snack.price)
            else:
                self.spend_cash(snack.price)
