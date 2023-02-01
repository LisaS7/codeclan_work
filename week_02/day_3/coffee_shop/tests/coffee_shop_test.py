import unittest
from src.coffee_shop import CoffeeShop


class TestCoffeeShop(unittest.TestCase):
    def setUp(self):
        self.coffee_shop = CoffeeShop("Cool Beans", 100)

    def test_has_name(self):
        self.assertEqual("Cool Beans", self.coffee_shop.name)

    def test_has_till(self):
        self.assertEqual(100, self.coffee_shop.till)

    def test_increase_till(self):
        self.coffee_shop.increase_till(10)
        self.assertEqual(110, self.coffee_shop.till)
