import unittest
from src.student import Student


class TestStudent(unittest.TestCase):
    def setUp(self):
        self.student = Student("Ada", "E42")

    def test_student_has_name(self):
        self.assertEqual("Ada", self.student.name)

    def test_student_has_cohort(self):
        self.assertEqual("E42", self.student.cohort)

    def test_student_can_update_name(self):
        self.student.name = "Mike"
        self.assertEqual("Mike", self.student.name)

    def test_student_can_change_cohort(self):
        self.student.cohort = "G21"
        self.assertEqual("G21", self.student.cohort)

    def test_student_can_talk(self):
        self.assertEqual("I can talk!", self.student.talk())

    def test_student_has_favourite_language(self):
        self.assertEqual("I love Python", self.student.say_favourite_language("Python"))
