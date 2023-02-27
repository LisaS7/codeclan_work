# Passing Unit Tests

**Lesson Duration: 60 minutes**

### Learning Objectives

- Be able to read a test file
- Be able to write the code required to pass a test

## Introduction

When we write code, how do we know that it works?

The only way that we can possibly know if our code works is to test it. Up until this point, we've been testing our code manually. We add a new piece of functionality, then we run the program and check that it works the way that we expected it to. If it does, great. If it doesn't, we make changes to the code until it does work the way that we wanted it to.

What if the new changes that we've made prevent some of our old code from working properly? Unfortunately, this is quite common in software development. It's called regression. Every time we add new functionality, we should check that all of our old functionality still works the way that it's supposed to too. This sounds like it might become quite time consuming as our programs continue to grow in scope. Before long, we'll be spending more time testing our program than we will writing code, and that doesn't sound like fun.

Luckily, we can write code to automatically test that our code works as we expect it to. Every time we add new functionality, we can add some new tests to go along with it. We can then run our new tests to make sure that the new code works and our old tests to make sure that there haven't been any regressions.

In this lesson we will learn how to read and run a test file, so that we can write the code required to pass the tests within it.

## How Does Testing Work?

Most functions recieve some kind of data as input, act on the data in some way, and return a result based on the data that they were given. Consider the following function:

```py
def add_five(number):
    return number + 5
```

This function takes in any number and adds five to it. How could we test that it works? If we give the number 1 to this function, we would expect to get the number 6 back.

We can group the things that we need to think about into three categories:

- Data
- Test
- Code

The data that we're working with in this case is very simple. It's the number 1. We would feed the number 1 to our function and test the result that it gives us back. In this case, our test would expect to receive the number 6. It would "pass" if it received the number 6 and "fail" if it receives any other value.

The code that we are testing here is the simple `add_five()` function above.

> Open the start_code and take a few minutes to read record_store_test.py

## Reading a Test File

There will be a few things in this file that you aren't familiar with. For one, it's written using a class. We won't worry about this too much as we won't be expecting you to create a test file of your own for the time being. For now, the focus will be on reading and understanding a test file so that you can write the code required to pass the tests and run the tests to make sure that your code works.

Near the top of the file, you will see the `setUp` function. This function defines the data that we will be available for us to work with within in our tests. This data will be fed into our functions so that we can test the results. The `setUp` function will run before each of our tests, ensuring that our data is in exactly the same state every time each test runs.

Below the `setUp` function you will see a number of tests. Each one is currently marked with the `@unittest.skip` decorator, meaning that they wouldn't run if we were to run our tests. This will allow us to unskip and work on a single test at a time.

We will write the code to pass these tests in a separate file, `src/record_store.py`.

How do we run our tests?

We would import all of our test files into `run_tests.py` and then run `run_tests.py` to run our tests. Let's give it a go and see what happens.

```sh
python3 run_tests.py

# sss
# ----------------------------------------------------------------------
# Ran 3 tests in 0.000s

# OK (skipped=3)
```

Great. Our test file is running and we can see that all 3 tests are being skipped. Let's unskip the first one and get to work on making it pass!

Comment out or delete the `@unittest.skip` decorator for `test_get_name` and run the tests again.

```py
# @unittest.skip("delete this line to run the test")
def test_get_name(self):
    result = get_name(self.record_store)
    self.assertEqual("CodeClan Records", result)
```

This time we get a very different result:

```sh
python3 run_tests.py

# sEs
# ======================================================================
# ERROR: test_get_name (tests.record_store_test.TestRecordStore)
# ----------------------------------------------------------------------
# Traceback (most recent call last):
#   File "/.../tests/record_store_test.py", line 40, in test_get_name
#     result = get_name(self.record_store)
# NameError: name 'get_name' is not defined

# ----------------------------------------------------------------------
# Ran 3 tests in 0.000s

# FAILED (errors=1, skipped=2)
```

We can see now that we have two skipping tests and one that is causing an error. Errors can often be annoying to deal with, but they're actually very helpful when testing. If we follow the trail of errors, we can let them guide us into writing working code. Also, it's worth noting that we should _always_ run our tests before we write the code to pass the test. If you've never seen a test fail then how do you know that it _can_ fail? Maybe it's broken and passes all the time even if it should fail!

We're getting a `NameError` because "name `get_name` is not defined". Let's look at the test and see if we can figure out what's going on here.

```py
# @unittest.skip("delete this line to run the test")
def test_get_name(self):
    result = get_name(self.record_store)
    self.assertEqual("CodeClan Records", result)
```

First, let's look at the game of the test. It's called `test_get_name`. We can infer from this that we're to write some kind of name getting functionality.

Next, we'll look at the body of the test. The test tries to call a function `get_name`, which currently doesn't exist. This is the function that it's trying to test and the function that we will have to create. The test is already telling us how the function should be used, so we have quite a lot of information to work with.

We can see that the `get_name` function is passed the `record_store` dictionary and it returns some kind of value, which is being stored in the variable `result`.

On the next line, we can see that the function `assertEqual` is being called. It takes two arguments. If the arguments are the same, the test passes. If they're different, the test fails.

This test expects the value of the `result` variable to be `"CodeClan Records"`, so we know that our `get_name` function has to take in the `record_store` dictionary and return `"CodeClan Records"`.

If we look at the data defined within the `setUp` function:

```py
self.record_store = {
    "name": "CodeClan Records",
    "money": 100,
    "records": [
        self.record1,
        self.record2,
        self.record3
    ]
}
```

We can see that we could access and return this string via the `"name"` key within the dictionary.

Now that we know what we need to do, let's go ahead and do it!

## Passing a Test

We were getting a `NameError` because the function `get_name` doesn't exist. The first thing that we have to do is define the function. We also know that the test was passing the `record_store` dictionary to the function when it tried to call it, so we should add that as a parameter too.

```py
# record_store.py

def get_name(record_store): # NEW
    pass                    # NEW
```

That should be everything that we need to do in order to fix the error that we had, so let's run the tests again and see what happens now.

```sh
python3 run_tests.py

# sFs
# ======================================================================
# FAIL: test_get_name (tests.record_store_test.TestRecordStore)
# ----------------------------------------------------------------------
# Traceback (most recent call last):
#   File "/.../tests/record_store_test.py", line 41, in test_get_name
    # self.assertEqual("CodeClan Records", result)
# AssertionError: 'CodeClan Records' != None

# ----------------------------------------------------------------------
# Ran 3 tests in 0.000s

# FAILED (failures=1, skipped=2)
```

The first thing that we should notice here is that we aren't getting an error any more! We've moved on from errors to a failing test. This is great news. Our code runs, but the test doesn't get the result that it wanted.

We can see that the test expected to get `"CodeClan Records"` but it actually got `None` because we haven't told our function to return anything. Let's update our function, so that it actually returns the string that the test is looking for, and then run the test again.

```py
# record_store.py

def get_name(record_store):
    return record_store["name"]
```

> Note: We are NOT returning the hard-coded value `"CodeClan Records"`, even though this would pass our test. We have to work with the data (the `record_store` dictionary) that we were given by the test.

```sh
python3 run_tests.py

# s.s
# ----------------------------------------------------------------------
# Ran 3 tests in 0.000s

# OK (skipped=2)
```

Great news! We have a passing test. Now let's get to work on the second one.

Again, we'll start by removing the `@unittest.skip` decorator that tells `unittest` to skip the test.

```py
# @unittest.skip("delete this line to run the test")
def test_find_record_by_title(self):
    result = find_record_by_title("Pet Sounds", self.record_store)
    self.assertEqual(self.record1, result)
```

Now, let's think about what this test wants from us/

The test is called `test_find_record_by_title`, so we can assume that we're supposed to use a title to find a given record within the dataset.

We can see that the test calls `find_record_by_title` and passes to it the title of a record and the record store that is supposed to be searched.

A value is returned from the function and it is compared against `record1`, which is the dictionary for The Beach Boys - Pet Sounds.

We can summise from this that our function will have to take in a record name and a record store and then search for the record within the record store, returning it if it is found.

Let's run the test, see it fail and figure out what we have to do.

```sh
python run_tests.py

# E.s
# ======================================================================
# ERROR: test_find_record_by_title (tests.record_store_test.TestRecordStore)
# ----------------------------------------------------------------------
# Traceback (most recent call last):
#   File "/.../tests/record_store_test.py", line 45, in test_find_record_by_title
#     result = find_record_by_title("Pet Sounds", self.record_store)
# NameError: name 'find_record_by_title' is not defined

# ----------------------------------------------------------------------
# Ran 3 tests in 0.000s

# FAILED (errors=1, skipped=1)
```

That's right! We don't have a function named `find_record_by_title`, so we'll have to create one. Again, we know that the test is passing a record title and a record store to the function, so we can add parameters for those.

```py
# record_store.py

def find_record_by_title(record_title, record_store):
    pass
```

Let's run the test again and see what it wants us to do next.

```sh
# F.s
# ======================================================================
# FAIL: test_find_record_by_title (tests.record_store_test.TestRecordStore)
# ----------------------------------------------------------------------
# Traceback (most recent call last):
#   File "/home/jarrod/CodeClan/git-repositories/pt-psd/week_05/day_3/passing_unit_tests/start_code/tests/record_store_test.py", line 46, in test_find_record_by_title
#     self.assertEqual(self.record1, result)
# AssertionError: {'artist': 'The Beach Boys', 'title': 'Pet Sounds', 'genre': 'Pop', 'price': 10} != None

# ----------------------------------------------------------------------
# Ran 3 tests in 0.000s

# FAILED (failures=1, skipped=1)
```

Again, we've moved on from the error message that we saw before and now we have a failing test. We can see that the test is expecting to get a dictionary, but instead it's getting `None`. We'll have to add the functionality to find and return the correct dictionary now.

```py
# record_store.py

def find_record_by_title(record_title, record_store):
    found_record = None
    for record in record_store["records"]:
        if record["title"] == record_title:
            found_record = record

    return found_record
```

Looks good to me. Let's run the tests again and see what happens now.

```sh
python3 run_tests.py

# ..s
# ----------------------------------------------------------------------
# Ran 3 tests in 0.000s

# OK (skipped=1)
```

Great, looks like we have two passing tests now!

## Task (5-10 minutes)

Pass the final test!

Try to answer the following questions before you start

- What should your function be called?
- What arguments are going to be passed to your function?
- What is the test expecting you to return from your function?

If we look at the test, we can see that there is no `result` variable like the one in the previous tests. This test doesn't actually expect us to return anything, rather it expects values within the `record_store` to change.

<details>
<summary>Solution</summary>

```py
# record_store.py

def sell_record(record, record_store):
    record_store["money"] += record["price"]
    record_store["records"].remove(record)
```
</details>

When we sell a record the money in the record store goes up and the record is removed from the store's collection.

## Conclusion

Now that we are able to test our code, we can be sure that it works without spending ages testing it manually. We can also rest assured that we haven't broken our old code every time that we make changes now, because we can simply run our old tests again to check.

