import unittest

from classes.customer import Customer
from classes.pet import Pet


class TestCustomer(unittest.TestCase):
    def setUp(self):
        self.customer = Customer("Jack Jarvis", 1000)
        self.pet = Pet("Blue", "cat", "British Shorthair", 500)

    def test_customer_has_name(self):
        self.assertEqual("Jack Jarvis", self.customer.name)

    def test_customer_has_cash(self):
        self.assertEqual(1000, self.customer.cash)

    def test_customer_can_reduce_cash(self):
        self.customer.reduce_cash(500)
        self.assertEqual(500, self.customer.cash)

    def test_pets_start_at_0(self):
        self.assertEqual(0, self.customer.pet_count())

    def test_can_add_pet(self):
        self.customer.add_pet(self.pet)
        self.assertEqual(1, self.customer.pet_count())

    def test_can_get_total_pet_cost(self):
        self.customer.add_pet(self.pet)
        self.customer.add_pet(self.pet)
        self.customer.add_pet(self.pet)

        self.assertEqual(1500, self.customer.get_total_value_of_pets())
