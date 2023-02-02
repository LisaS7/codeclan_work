import unittest
from src.coffee_shop import CoffeeShop
from src.drinks import Drink


class TestCoffeeShop(unittest.TestCase):
    def setUp(self):
        mocha = Drink("Mocha", 5, 15)
        tea = Drink("Tea", 3, 10)
        self.drinks = {mocha: 5, tea: 8}
        self.coffee_shop = CoffeeShop("Cool Beans", 100, self.drinks)

    def test_has_name(self):
        self.assertEqual("Cool Beans", self.coffee_shop.name)

    def test_has_till(self):
        self.assertEqual(100, self.coffee_shop.till)

    def test_increase_till(self):
        self.coffee_shop.increase_till(10)
        self.assertEqual(110, self.coffee_shop.till)

    def test_add_drink(self):
        latte = Drink("Latte", 5, 15)
        self.coffee_shop.add_drink(latte)
        self.assertEqual(1, self.coffee_shop.drinks[latte])

    def test_has_drinks(self):
        self.assertEqual(self.drinks, self.coffee_shop.drinks)

    def test_stock_total(self):
        self.assertEqual(13, self.coffee_shop.stock_total())
