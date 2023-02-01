import unittest
from src.coffee_shop import CoffeeShop
from src.drinks import Drink


class TestCoffeeShop(unittest.TestCase):
    def setUp(self):

        stock = [{"drinks":{
                    "Mocha": {
                        "price": 8,
                        "caffeine_level": 15,
                    }

                    "Tea": {
                        "price": 3,
                        "caffenine_level": 5,
                    }
                }}]

        mocha = Drink("Mocha", 5, 15)
        tea = Drink("Tea", 3, 10)
        drinks = {
            mocha: 20,
            tea: 28,
        }
        self.coffee_shop = CoffeeShop("Cool Beans", 100, drinks)

    def test_has_name(self):
        self.assertEqual("Cool Beans", self.coffee_shop.name)

    def test_has_till(self):
        self.assertEqual(100, self.coffee_shop.till)

    def test_increase_till(self):
        self.coffee_shop.increase_till(10)
        self.assertEqual(110, self.coffee_shop.till)

    def test_has_drinks(self):
        self.assertEqual(self.drinks, self.coffee_shop.drinks)

    def test_stock_total(self):
        self.assertEqual(48, self.coffee_shop.stock_total())
