# Multiple Classes

**Duration: 90 minutes**

## Learning Objectives

- Use multiple classes together

### Introduction

So far, we have started our journey into Object Oriented Programming by writing single classes. But in the real world, things don't exist in isolation - they interact with each other.

We're going to investigate how we can develop our programs by making our classes interact with each other. We're going to model a pet shop, which interacts with customers and pets.

> Hand out start point

Our start point contains a `customer_test`, `pet_test`, `pet_shop_test` and `Pet` class.

### Managing a person/customer.

So let's start off with the next most simple type of class which would be our customer.

So we are going to create a Customer class.

Customers will have:

- name
- cash
- pets (List - starts off empty)

Customers should be able to

- add a pet
- remove cash

Let's start off by looking at the test file for customer.

```python
# customer_test.py

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

    # REST OF THE TESTS ARE COMMENTED OUT
```

When setting up a new customer we want them to be given a name and some money, but to have an empty list of pets at the beginning. Temptation is to pass in an empty list when we create the customer but this is actually bad practice. Think about it... every customer would be passed an empty list. This is a waste as it will always be the same. There is a much better way of ensuring that every customer we create starts off with an empty list, which we will see shortly.

Firstly, let's un-skip the first three tests and create the customer class to get these tests passing. We will want our customer to have a name, some cash, and the ability to reduce their cash so they can pay for the pet. 

```bash
# terminal
touch classes/customer.py
```

```python
# customer.py

class Customer:
    pass

```

> Note: This is the minimum needed to create an empty class. We can now run our tests and watch them fail.

```bash
# terminal
python3 run_tests.py
```

## Task - 5 mins

Create the customer class to get the tests passing. (Don't worry about the pets list just yet)

```python
# customer.py

class Customer:

    def __init__(self, name, cash):
        self.name = name
        self.cash = cash

    def reduce_cash(self, amount):
        self.cash -= amount

```

Cool our tests now pass.

Next let's deal with the customer's pets.

As we said we want the customer to have an empty pets list when they are created, but we don't want to pass in an empty list every time a customer is created. Instead, we are simply going to define a new instance variable in `__init__` and set it to be an empty list.

```python
# customer.py

class Customer:

    def __init__(self, name, cash):
        self.name = name
        self.cash = cash
        self.pets = []

```

Great now every time we new up a customer they will have an empty pets list.

In our test file we have a test which checks if the number of pets a customer has starts at 0. Let's unskip this test.

```python
# customer_test.py

# @unittest.skip("delete this line to run the test") DELETED
def test_pets_start_at_0(self):
    self.assertEqual(0, self.customer.pet_count())

```

Note that to test the number, it doesn't access the list directly, but calls a method `pet_count`

### Task - 5 min

Write the `pet_count` method to get the test passing.

```python
# customer.py

def pet_count(self):
    return len(self.pets)
  
```

Great.

Next we probably want to be able to add a pet to the customer's pets list.

Again, we have a test for this. We can see from the test that the add_pet method takes in a pet, and we are using the `pet_count` method to check that this has worked. This indicates that the add_pet method will not return anything. So we should apply this to our method when we write it.

```python
# customer_test.py

 #   @unittest.skip("delete this line to run the test") DELETED
    def test_can_add_pet(self):
        self.customer.add_pet(self.pet)
        self.assertEqual(1, self.customer.pet_count())
```

So, let's write our method in `customer.py`. The method will have `self` and `pet` as parameters, and we will append the pet onto the end of our pets list.

```python
# customer.py

def add_pet(self, pet):
    self.pets.append(pet)
```

Fantastic so now we are able to add a pet to our customer.

This is where it gets interesting. Our pets list now has instances of the Pet class inside of it. Each pet object in this list has a name, type, breed and price attached to it that we can access. We can use these properties to do something within our Customer class, for example, calculating the total cost of all of the pets in the list. We have a test for this in our customer_test which is currently skipped, so let's 'un-skip' it, and we'll write the method together:

```python
# customer_test.py

# @unittest.skip("delete this line to run the test") DELETED
def test_can_get_total_pet_cost(self):
    self.customer.add_pet(self.pet)
    self.customer.add_pet(self.pet)
    self.customer.add_pet(self.pet)

    self.assertEqual(1500, self.customer.get_total_value_of_pets())
```

And now we will get that test passing. We want to loop over all our pets, and add the price of each pet to a total.

```python
# customer.py

def get_total_value_of_pets(self):
    total = 0
    for pet in self.pets:
        total += pet.price
    return total

```

Within our for loop, each `pet` is a pet object, so we can access the pet's price property by calling `.price` on the pet, and add this value to our total.

So now the customer can get the total value of all their pets.

## Pet Shop

Last thing to do now is to get the pet shop involved in all this.

The pet shop will be a place to store all the pets for sale, and it will have methods related to selling a pet.

So our pet shop will have:

- name
- pets (List that will be passed in.)
- pets_sold
- cash

And our pet shop will be able to:

- remove pet
- increase cash
- increase pets sold
- sell pet to a customer

This time instead of having an empty lsit we will pass in a pre-filled list of pets to the shop. But `pets_sold` will always start at 0 so we will set the value of pets_sold in `__init__`.

Have a look at the pet_shop_test

```python
# pet_shop_test.py
import unittest

from classes.pet_shop import PetShop
from classes.pet import Pet
from classes.customer import Customer

class TestPetShop(unittest.TestCase):
    def setUp(self):
        self.pet_1 =  Pet("Sir Percy", "cat", "British Shorthair", 500)
        self.pet_2 =  Pet("King Arthur", "dog", "Husky", 900)

        pets = [self.pet_1, self.pet_2]
        self.pet_shop = PetShop("Camelot of Pets", pets, 1000)

    def test_pet_shop_has_name(self):
        self.assertEqual("Camelot of Pets", self.pet_shop.name)

    @unittest.skip("delete this line to run the test")
    def test_pet_shop_case(self):
        self.assertEqual(1000, self.pet_shop.total_cash)

    @unittest.skip("delete this line to run the test")
    def test_pet_shop_pets_sold_starts_at_0(self):
        self.assertEqual(0, self.pet_shop.pets_sold)

    @unittest.skip("delete this line to run the test")
    def test_pet_shop_stock_count(self):
        self.assertEqual(2, self.pet_shop.stock_count())

    @unittest.skip("delete this line to run the test")
    def test_increase_pets_sold(self):
        self.pet_shop_increase_pets_sold()
        self.assertEqual(1, self.pet_shop.pets_sold)

    @unittest.skip("delete this line to run the test")
    def test_can_increase_total_cash(self):
        self.pet_shop.increase_total_cash(500)
        self.assertEqual(1500, self.pet_shop.total_cash)

    @unittest.skip("delete this line to run the test")
    def test_can_remove_pet_from_stock(self):
        self.pet_shop.remove_pet(self.pet_1)
        self.assertEqual(1, self.pet_shop.stock_count())

    @unittest.skip("delete this line to run the test")
    def test_can_find_pet_by_name(self):
        pet = self.pet_shop.find_pet_by_name("Sir Percy")
        self.assertEqual("Sir Percy", pet.name)

    @unittest.skip("delete this line to run the test")
    def test_can_sell_pet_to_customer(self):
        customer = Customer("Jack Jarvis", 1000)
        self.pet_shop.sell_pet_to_customer("Sir Percy", customer)
        self.assertEqual(1, customer.pet_count())
        self.assertEqual(1, self.pet_shop.stock_count())
        self.assertEqual(1, self.pet_shop.pets_sold)
        self.assertEqual(1500, self.pet_shop.total_cash)

```

### Task - 15 minutes

Un-skip one test at a time and code the pet shop class to get all the tests up to, and including `test_can_find_pet_by_name` passing

(Remember that `PetShop` will have a `pets_sold` property that starts at 0)

```python
# pet_shop.py

class PetShop:
    def __init__(self, name, pets, total_cash):
        self.name = name
        self.pets = pets
        self.total_cash = total_cash
        self.pets_sold = 0

    def stock_count(self):
        return len(self.pets)

    def increase_pets_sold(self):
        self.pets_sold += 1

    def increase_total_cash(self, amount):
        self.total_cash += amount

    def remove_pet(self, pet):
        self.pets.remove(pet)

    def find_pet_by_name(self, pet_name):
        for pet in self.pets:
            if pet.name == pet_name:
                return pet
```

### Selling a pet to a customer.

Lastly we will sell a pet to our customer.

So where will this happen?

We can either do this 2 ways. We can have a method in customer to buy pet or have a method in `PetShop` to sell to customer.

We are going to write a `sell_pet_to_customer` method in the pet shop class.

Why?

Easy....Because it is the pet shop is the one selling the pet. So they should trigger the process. All the customer needs to know is the pet they want to buy.

We have a test for this which is currently skipped. 

```python
# pet_shop_test.py

#@unittest.skip("delete this line to run the test") DELETED
    def test_can_sell_pet_to_customer(self):
        customer = Customer("Jack Jarvis", 1000)
        self.pet_shop.sell_pet_to_customer("Sir Percy", customer)
        self.assertEqual(500, customer.cash)
        self.assertEqual(1500, self.pet_shop.total_cash)
        self.assertEqual(1, self.pet_shop.pets_sold)
        self.assertEqual(1, self.pet_shop.stock_count())
        self.assertEqual(1, customer.pet_count())
```

This is an example of an integration test. So when a customer buys a pet we want:

Customer's `cash` to go down by the price of the pet.
Shop's `total_cash` to increase by price of the pet.
Shop's `pets_sold` to go up by 1.
Shop's `stock_count` to go down by 1.
Customer's `pet_count` to go up by 1.

As we see in the test, our `sell_pet_to_customer` method takes in a name of a pet, and a customer. We will use this information to find the correct pet, and then sell that pet to the customer. We want to make sure that all of the changes indicated in the test are covered by this one method.

Now we can code the `sell_pet_to_customer` method in the pet shop.

The first thing this method should do is find the pet to sell. (We won't worry about cases where the pet is not found just yet). We already have a method written that will do this for us, so let's use it.

```python
# pet_shop.py

def sell_pet_to_customer(self, name, customer):
    pet = self.find_pet_by_name(name)

```
Now that we have found the pet, the pet shop will request payment from the customer. We don't want to directly alter the customer's cash property from the PetShop class (for example calling `customer.cash -= pet.price`), as it's not the PetShop's responsibility to deduct the money from the customer's cash. Instead, it will 'request' that the customer's cash is reduced by calling the customer's `reduce_cash` method. We can do this, as we can access all the properties and methods attached to the customer object that we passed into the sell_pet_to_customer method.

By calling this method, it allows the customer to be in charge of altering their own cash. (Imagine the first example is the PetShop directly taking money from the customer's wallet, compared to the second, where the customer is taking moeny out of their own wallet)

This is something that we have to be aware of when we have multiple classes interacting with each other. Which class is responsible for which actions, and where will they be called?

```python
# pet_shop.py

def sell_pet_to_customer(self, name, customer):
    pet = self.find_pet_by_name(name)
    customer.reduce_cash(pet.price) #ADDED

```

Now the customer has taken the money out of their wallet, we can add that money to the PetShop's cash, and increase the number of pets sold.

```python
# pet_shop.py

def sell_pet_to_customer(self, name, customer):
    pet = self.find_pet_by_name(name)
    customer.reduce_cash(pet.price)
    self.increase_total_cash(pet.price) #ADDED
    self.increase_pets_sold() #ADDED

```

Now that the pet has been paid for, we can remove the pet from the PetShop's stock, and give it to the customer. We have methods written for us to do this: the PetShop has a remove_pet method, and the customer has an add_pet method. So let's use these to finish off our method.

```python
# pet_shop.py

def sell_pet_to_customer(self, name, customer):
    pet = self.find_pet_by_name(name)
    customer.reduce_cash(pet.price)
    self.increase_total_cash(pet.price)
    self.increase_pets_sold()
    self.remove_pet(pet) #ADDED
    customer.add_pet(pet) #ADDED
```

### Conclusion & Composition

One way we can make objects interact is to add a list as an instance variable and pass in objects into that list. But it doesn't have to be a list! An instance variable could be a single object, such as customers only having a single `Pet` property, for example. Once we have objects within this list, we can access any properties or methods they have on them.

For example, a car class might have an `engine` property, and to start the car, we might do `engine.start()`. This is a process called _composition_, and we'll look at it in more detail later on in the course.

We can also pass objects into methods and use the properties or methods attached to the object. For example, we passed a full `Customer` object into the `sell_pet_to_customer` method in the `PetShop` and we could call methods on the `Customer` object.
