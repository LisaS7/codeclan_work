import unittest
from src.person import Person


class TestPerson(unittest.TestCase):
    def setUp(self):
        self.person = Person("Guido van Rossum", 64)

    def test_person_has_name(self):
        self.assertEqual("Guido van Rossum", self.person.name)

    def test_person_has_age(self):
        self.assertEqual(64, self.person.age)
