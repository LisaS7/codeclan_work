import unittest
from src.customer import Customer
from src.coffee_shop import CoffeeShop
from src.food import Food


class TestCustomer(unittest.TestCase):
    def setUp(self):
        self.customer = Customer("Frank", 50, 20)
        self.coffee_shop = CoffeeShop("Cool Beans", 200, ["Mocha", "Latte", "Tea"])

    def test_has_name(self):
        self.assertEqual("Frank", self.customer.name)

    def test_has_wallet(self):
        self.assertEqual(50, self.customer.wallet)

    def test_has_age(self):
        self.assertEqual(20, self.customer.age)

    def test_initial_energy(self):
        self.assertEqual(0, self.customer.energy)

    def test_is_over_16__True(self):
        self.assertEqual(True, self.customer.is_over_16())

    def test_is_over_16__False(self):
        self.customer_1 = Customer("Perry", 50, 12)
        self.assertEqual(False, self.customer_1.is_over_16())

    def test_reduce_wallet(self):
        self.customer.reduce_wallet(25)
        self.assertEqual(25, self.customer.wallet)

    def test_buy_drink__lower_energy(self):
        drink_price = 10
        self.customer.buy_drink(drink_price, 18, self.coffee_shop)
        self.assertEqual(40, self.customer.wallet)
        self.assertEqual(210, self.coffee_shop.till)
        self.assertEqual(18, self.customer.energy)

    def test_buy_drink__higher_energy(self):
        drink_price = 10
        self.customer_1 = Customer("Perry", 50, 12)
        self.customer_1.energy = 60
        self.customer_1.buy_drink(drink_price, 18, self.coffee_shop)
        self.assertEqual(50, self.customer_1.wallet)
        self.assertEqual(200, self.coffee_shop.till)
        self.assertEqual(60, self.customer_1.energy)

    def test_buy_food(self):
        self.customer_2 = Customer("George", 50, 12)
        self.customer_2.energy = 75
        self.customer_2.buy_food(34)
        self.assertEqual(41, self.customer_2.energy)
