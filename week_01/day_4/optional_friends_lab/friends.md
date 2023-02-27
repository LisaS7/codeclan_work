# Friends Exercise/Lab

### Learning Objectives

- Understand what the setUp() method is used for in Unittest

## Using setUp()

Up until now every test we have seen, the objects that we used within our tests were instantiated within the test itself.

```python
def test_join_string(self):
  string_1 = "Mary had a little lamb, "
  string_2 = "its fleece was white as snow"
  joined_string = join_string( string_1, string_2 )
  self.assertEqual( "Mary had a little lamb, its fleece was white as snow", joined_string )

```

This was working nicely, but we got introduced to more complex data structures, like lists and dictionaries, not to mention next week we will create our own custom objects.

What problems can this cause?

In case we want to calculate something using a more complex data structure (like a dictionary representing a person) or we want to manipulate said dictionary, we might end up repeating ourselves every time we write a new test. Even if our person dictionary is only one key-value pair, I'd rather not repeat myself by creating it for every test - since we know, we should write one test for one function!

Even if we find a solution to the repeating problem, and have a way to use one variable in all my tests, I might run into another problem: what will happen if I manipulate my variable? If I change, let's say, a dictionary's "name" value in one of my tests, but my next test checks the value of "name", which one should it check for? The one before the change, or the one after?

Luckily, Unittest gives us a solution for this!

Enter setUp()

```python
#Copy this into a test file, no need for students to type along:

class TestExample(Unittest.TestCase)

  def setUp(self):
    self.person1 = {"name": "Alex", "age": 30}

  def test_can_change_name(self):
    self.person1["name"] = "Alexander"
    self.assertEqual("Alexander", self.person1["name"])

  def test_person_has_name(self):
    self.assertEqual("Alex", self.person1["name"])

```

What the setUp() method does is it runs before each test, setting us up one or more variables that can be used in all our tests.

Since we cannot guarantee that tests will run in order, this will make sure that even if my name changing test runs first, the name checking test will have a brand new, default hash to work with - ensuring I know the expected outcome.

Important: You have to name your setUp() properly. It is a function that's given to us by Unittest, misspelling it will cause Unittest to miss it.


## Lab Time!

We have a bunch of information about a set of friends.
We're going to find out some interesting information about them.

We need to to complete the tasks in the comments of the `friends_test.py` file.
Unskip the tests in that file one at a time, then write the function to pass the test in `friends.py`.

If you get stuck, there are hints on how to approach the problem for each question.

A few extra notes...

Firstly, remember we can pass more than one argument into a function and this will need to be done for some of the questions (check for the hints)

Secondly, this is probably the first time where we might not test the return value of a function, but instead check that it's completed the action we want it to (read the hint for question 4)
