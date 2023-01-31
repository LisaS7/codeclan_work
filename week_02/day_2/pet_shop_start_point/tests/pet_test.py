import unittest

from classes.pet import Pet

class TestPet(unittest.TestCase):
    def setUp(self):
        self.pet =  Pet("Sir Percy", "cat", "British Shorthair", 500)

    def test_pet_has_name(self):
        self.assertEqual("Sir Percy", self.pet.name)

    def test_pet_has_type(self):
        self.assertEqual("cat", self.pet.type)

    def test_pet_has_breed(self):
        self.assertEqual("British Shorthair", self.pet.breed)

    def test_pet_has_price(self):
        self.assertEqual(500, self.pet.price)
