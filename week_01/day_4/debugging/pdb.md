# Intro to debugging with PDB

## Learning Objectives

- Be able to use PDB to set breakpoints
- Be able to use PDB to step through your code
- Be able to use PDB to locate bugs

### Introduction

Sometimes, as programmers, we will come across bugs that seem really hard to fix. If we read through the code, and nothing jumps out, what can we do?

It would be really useful to be able to step through our code line by line, inspecting the state of the program along the way. We could look at objects and variables and see exactly what was happening in our code.

Fortunately, many programming languages provide such a feature. Today, we're going to look at the PDB library, which does exactly that.

> Hand out the starter code, and give them five minutes to look over it.

### Setup

In the code we've distributed we've got a list of dictionaries where each element in the list represents a cake. Each cake has a name, ingredients, and a rating.

We've got a function called `get_average_rating` that should calculate the average rating for the cakes that it holds as inventory.

If we look at our cakes we can see that the average rating should be 3 (9 / 3).

> Normally we would have a test written for this but the learning objective here is to see how you can use PDB to debug.

If we run the cake_shop.py the output is:

```
1.6666666666666667
```

It looks like our method isn't working. At this point, we _could_ look at our code and try to figure out what was happening. We might work it out, we might not.

> Bring up the `get_average_rating()` method in `cake_shop.py`

Looking at the function, it looks like it loops through the cakes, adding the individual cake's rating to an list.

Then, it adds the ratings together, gets the total number of cakes, and divides the total by the number of cakes to get an average rating.

This _seems_ OK, but there's obviously an issue.

How can we figure out what the issue is?

### PDB!

We know that there's an issue in our `get_average_rating()` method, so let's start by putting a **breakpoint** at the start of that method.

```python
# cake_shop.py
# ...

def get_average_rating(cakes):
    breakpoint()    # ADDED
    ratings = []

    for cake in cakes:
        ratings.append(cake["rating"])

        ratings_total = sum(ratings)
        number_of_cakes = len(cakes)
        average = ratings_total / number_of_cakes

        return average
```

If we run the code again, we can see that we're presented with a weird, new interface.

We've paused execution of the program at the point where we've called `breakpoint()`. At this point we can take a look around our program!

> Try some of the following:

```pdb
cakes
cakes[0]
cakes[0]["name"]
```

OK! Hopefully you can already see how useful this might be.

It's important to note at this point that the arrow shows us the point where the code has paused, _before_ executing it.

So if we type `ratings` here, we get a `NameError: name 'ratings' is not defined`. We haven't executed the current line yet.

Let's move to the next line, by pressing the `n` key.

We can see that the program advances to the next line, just before the `for` loop begins.

Top tip - press `l` (lower case "L") to see the wider context of the program.

If we press `n` again, we can advance the program to append the individual cake's rating to the list of all ratings.

If we press `n` again, we would expect the loop to continue, with the next cake. But instead, it advances to the line where the ratings are added together - not what we are expecting!

Indeed, if we press `n` a few more times, it looks like we've got a problem with our loop - it is only executing once, then returning, rather than once for each cake.

This is a problem related to our indentation.

> De-tab everything after `ratings.append(cake.rating)`, so that it looks like this:

```python
def get_average_rating(cakes):
    breakpoint()
    ratings = []

    for cake in cakes:
        ratings.append(cake["rating"])

    ratings_total = sum(ratings)
    number_of_cakes = len(cakes)
    average = ratings_total / number_of_cakes

    return average
```

We can type `c`, or `continue` to jump out of PDB and continue the program.

### Wrapping up

Here is a list of the most common PDB commands you can use:

`h`: help
`n`: next line
`l`: list source code - shows context
`j [line_number]`: jump to the specified line number - allows you to skip lines of code, or execute code more than once.
`a`: arguments - show arguments for the current function
`c`: continue executing the program

 Check out the [full documentation for PDB](https://docs.python.org/3.6/library/pdb.html).
