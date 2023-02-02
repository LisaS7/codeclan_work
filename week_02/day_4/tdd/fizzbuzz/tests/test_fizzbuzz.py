import unittest
from src.fizzbuzz import fizz_buzz


class TestFizzBuzz(unittest.TestCase):
    def test_fizz_buzz__divisible_by_3_and_5(self):
        number = 15
        self.assertEqual("FizzBuzz", fizz_buzz(number))

    def test_fizz_buzz__divisible_by_3(self):
        number = 9
        self.assertEqual("Fizz", fizz_buzz(number))

    def test_fizz_buzz__divisible_by_5(self):
        number = 10
        self.assertEqual("Buzz", fizz_buzz(number))

    def test_fizz_buzz__not_divisible_by_5_or_3(self):
        number = 7
        self.assertEqual("7", fizz_buzz(number))
