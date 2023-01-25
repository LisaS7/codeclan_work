MONTHS = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"]


def return_10():
    return 10


def add(num1, num2):
    return num1 + num2


def subtract(num1, num2):
    return num1 - num2


def multiply(num1, num2):
    return num1 * num2


def divide(num1, num2):
    return num1 / num2


def length_of_string(string):
    return len(string)


def join_string(string1, string2):
    return ''.join([string1, string2])


def add_string_as_number(string1, string2):
    return int(string1) + int(string2)


def number_to_full_month_name(number):
    return MONTHS[number-1]


def number_to_short_month_name(number):
    return MONTHS[number-1][0:3]


def volume_of_cube(length):
    return length ** 3


def reverse_string(string):
    return string[::-1]


def fahrenheit_to_celsius(temp):
    return (temp - 32)*5/9
