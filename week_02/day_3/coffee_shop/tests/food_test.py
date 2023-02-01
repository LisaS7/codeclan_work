import unittest
from src.food import Food


class TestFood(unittest.TestCase):
    def setUp(self):
        self.food = Food("pizza", 12, 34)

    def test_has_name(self):
        self.assertEqual("pizza", self.food.name)

    def test_has_price(self):
        self.assertEqual(12, self.food.price)

    def test_has_rejuvenation_level(self):
        self.assertEqual(34, self.food.rejuvenation_level)
