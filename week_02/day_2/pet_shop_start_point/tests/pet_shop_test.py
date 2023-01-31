import unittest

from classes.pet_shop import PetShop
from classes.customer import Customer
from classes.pet import Pet


class TestPetShop(unittest.TestCase):
    def setUp(self):
        self.pet_1 = Pet("Sir Percy", "cat", "British Shorthair", 500)
        self.pet_2 = Pet("King Arthur", "dog", "Husky", 900)

        pets = [self.pet_1, self.pet_2]
        self.pet_shop = PetShop("Camelot of Pets", pets, 1000)

    def test_pet_shop_has_name(self):
        self.assertEqual("Camelot of Pets", self.pet_shop.name)

    def test_pet_shop_has_cash(self):
        self.assertEqual(1000, self.pet_shop.total_cash)

    def test_pet_shop_pets_sold_starts_at_0(self):
        self.assertEqual(0, self.pet_shop.pets_sold)

    def test_pet_shop_stock_count(self):
        self.assertEqual(2, self.pet_shop.stock_count())

    def test_increase_pets_sold(self):
        self.pet_shop.increase_pets_sold()
        self.assertEqual(1, self.pet_shop.pets_sold)

    def test_can_increase_total_cash(self):
        self.pet_shop.increase_total_cash(500)
        self.assertEqual(1500, self.pet_shop.total_cash)

    def test_can_remove_pet_from_stock(self):
        self.pet_shop.remove_pet(self.pet_1)
        self.assertEqual(1, self.pet_shop.stock_count())

    def test_can_find_pet_by_name(self):
        pet = self.pet_shop.find_pet_by_name("Sir Percy")
        self.assertEqual("Sir Percy", pet.name)

    def test_can_sell_pet_to_customer(self):
        customer = Customer("Jack Jarvis", 1000)
        self.pet_shop.sell_pet_to_customer("Sir Percy", customer)
        self.assertEqual(500, customer.cash)
        self.assertEqual(1500, self.pet_shop.total_cash)
        self.assertEqual(1, self.pet_shop.pets_sold)
        self.assertEqual(1, self.pet_shop.stock_count())
        self.assertEqual(1, customer.pet_count())
