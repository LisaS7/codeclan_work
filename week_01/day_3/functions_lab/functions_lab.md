# Python Functions Practice

**Lesson Duration: 120 minutes**

### Learning Objectives
- Practice creating functions
- Practice creating objects, assigning variables, calling functions
- Practice testing, write expectation, then write solution

## Practicing Functions

More practice with functions!

Notice that `python_functions_practice.py` is empty.  This is where we will need to write our functions.

`run_tests.py` is the file we will run.

```bash
# terminal

python3 run_tests.py
```

You can see that we have 10 failing tests. Let's pass the first one.

```python
  #python_functions_test.py

  def test_return_10(self):
      return_10_result = return_10()
      self.assertEqual( 10, return_10_result )
```

```bash
#terminal

python3 run_tests.py
```

We have an expected failure - perfect.  What does the error say. Okay the method is not defined.  Let's define it.

> fail, fail again, fail better

```python
    #python_functions_test.py

  def return_10():
    pass
```

```bash
#terminal

python3 run_tests.py
```

Okay we now have the method but looking at our text we can see it is not giving us what we expect. Let's fix that

```python
# python_functions_practice.py

def return_10():
    return 10

```

Now our test should pass.

```bash
#terminal

python3 run_tests.py
```

Now that our test passes, we should make a commit to Git. Go and make the rest of the tests pass, making a Git commit each time.

## Note
Not a race, take your time. Try what you think will work, if it doesn't look at error. Look at the line number in the error message.

Before you call an instructor try and think about how will pose your question in terms of variables, arguments, parameters, functions etc.  Why does this not work? Will not be as valuable a question as I created this function to return 10 but when I call it I get None.I expect 'x' to happen,  but instead saw 'y'.
