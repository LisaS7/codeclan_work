def fizz_buzz(number):
    # if number % 3 == 0 and number % 5 == 0:
    #     return "FizzBuzz"
    # elif number % 3 == 0:
    #     return "Fizz"
    # elif number % 5 == 0:
    #     return "Buzz"
    # else:
    #     return str(number)

    #

    if number % 3 == 0:
        ret_string += "Fizz"
    if number % 5 == 0:
        ret_string += "Buzz"
    if ret_string == "":
        ret_string = str(number)
    return ret_string
