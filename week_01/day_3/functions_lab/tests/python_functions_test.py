from src.python_functions_practice import *

import unittest


class TestPythonFunctionPractice(unittest.TestCase):

    def test_return_10(self):
        return_10_result = return_10()
        self.assertEqual(10, return_10_result)

    def test_add(self):
        add_result = add(1, 2)
        self.assertEqual(3, add_result)

    def test_subtract(self):
        subtract_result = subtract(10, 5)
        self.assertEqual(5, subtract_result)

    def test_multiply(self):
        multiply_result = multiply(4, 2)
        self.assertEqual(8, multiply_result)

    def test_divide(self):
        divide_result = divide(10, 2)
        self.assertEqual(5, divide_result)

    def test_length_of_string(self):
        test_string = "A string of length 21"
        string_length = length_of_string(test_string)
        self.assertEqual(21, string_length)

    def test_join_string(self):
        string_1 = "Mary had a little lamb, "
        string_2 = "its fleece was white as snow"
        joined_string = join_string(string_1, string_2)
        self.assertEqual(
            "Mary had a little lamb, its fleece was white as snow", joined_string)

    def test_add_string_as_number(self):
        add_result = add_string_as_number("1", "2")
        self.assertEqual(3, add_result)

    def test_number_to_full_name__month_1(self):
        result = number_to_full_month_name(1)
        self.assertEqual("January", result)

    def test_number_to_full_name__month_3(self):
        result = number_to_full_month_name(3)
        self.assertEqual("March", result)

    def test_number_to_full_name__month_9(self):
        result = number_to_full_month_name(9)
        self.assertEqual("September", result)

    def test_number_to_short_month_name__month_1(self):
        first_month_string = number_to_short_month_name(1)
        self.assertEqual("Jan", first_month_string)

    def test_number_to_short_month_name__month_4(self):
        fourth_month_string = number_to_short_month_name(4)
        self.assertEqual("Apr", fourth_month_string)

    def test_number_to_short_month_name__month_10(self):
        tenth_month_string = number_to_short_month_name(10)
        self.assertEqual("Oct", tenth_month_string)

    # Further

    # Given the length of a side of a cube calculate the volume
    def test_volume_of_cube(self):
        volume = volume_of_cube(4)
        self.assertEqual(64, volume)

    # Given a String, return the String reversed
    def test_reverse_string(self):
        string = "Pizza"
        reversed_string = reverse_string(string)
        self.assertEqual("azziP", reversed_string)

    # Given a value in farenheit, convert this into celsius.
    def test_fahrenheit_to_celsius(self):
        farenheit = 41
        celcius = fahrenheit_to_celsius(farenheit)
        self.assertEqual(5, celcius)


if __name__ == '__main__':
    unittest.main()
