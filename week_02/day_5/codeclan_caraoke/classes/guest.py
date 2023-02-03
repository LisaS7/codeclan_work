class Guest:
    def __init__(self, name, cash, favourite_song):
        self.name = name
        self.cash = cash
        self.favourite_song = favourite_song

    def spend_cash(self, amount):
        self.cash -= amount

    def can_afford_fee(self, amount):
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
