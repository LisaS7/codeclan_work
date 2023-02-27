# List Comprehension

#### Duration 30 mins

## Learning Objectives

- Be able to write list comprehensions as an alternative to using loops and conditionals

## List Comprehension

List comprehensions allow us to build lists in a way that is concise, elegant, and _Pythonic_.

Let's imagine we have a list of numbers, and we want a list full of the _even_ numbers multiplied by themselves. (So we need the square of each even item in the list.)

We pretty much know how to do this already, doing something like this:

> Create a new file called `list_conditionals.py`

```python
# list_conditionals.py

# Remember, this effectively gives us a list of [1,2,3,4,5,6,7,8,9,10]
numbers = range(1, 11)
evens_squared = []
for number in numbers:
    if number % 2 == 0:
        evens_squared.append(number * number)

print(evens_squared)
```

Comprehensions allow us to re-write blocks of code, like the above, in a single line. The basic syntax goes something like this:

```python
evens_squared = [expression for item in list if condition]
```

This syntax might look strange, so let's break it down to make it nice and clear. We'll start with a a list of numbers, from 1 - 10.

```python
# list_conditionals.py

numbers = range(1, 11)
evens_squared = []
print(evens_squared)
```

Firstly, we write a set of square brackets, to announce that we're simply creating a new list. Next, we need something to loop over - in this case, our `numbers` list.

```python
# list_conditionals.py

numbers = range(1, 11)
evens_squared = [number for number in numbers]
print(evens_squared)
```

If we execute the code at this point, we'll see that we've looped over one list to create another - exactly the same as the first! Let's take it up a notch. We'll multiply the number by itself:

```python
# list_conditionals.py

numbers = range(1, 11)
evens_squared = [number * number for number in numbers]
print(evens_squared)
```

So our "expression" here is `number * number`. Let's add a condition next:

```python
# list_conditionals.py

numbers = range(1, 11)
evens_squared = [number * number for number in numbers if number % 2 == 0]
print(evens_squared)
```

And finally - to fulfil the promise of "a single line of code", we can remove the first line, too:

```python
# list_conditionals.py

evens_squared = [number * number for number in range(1, 11) if number % 2 == 0]
print(evens_squared)
```

So we've taken five lines of code - with a loop and conditional - and condensed it to one.

### Exercises: 15 minutes

> Create a new file called `task_loops.py`


**Part 1**

Using single list comprehension, and the following list:

```python
# task_loops.py

ages = [5, 15, 64, 27, 84, 26]
```
- Return a list of only the odd ages.

**Part 2**

Using single list comprehension, and the following list:

```python
# task_loops.py

chicken_names = ["Hen Solo", "Cluck Norris", "Hennifer Lopez", "ChewPekka", "Feather Locklear"]
```

- Return a list with chickens whose name is more than 10 characters
- Return a list of chickens whose name starts with the letter `H`

**Part 3**

Using a single list comprehension, and the following list:

```python
# task_loops.py

words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
```

- Build a new list, with the first letter from each word
- Convert each letter to lower case

Expected output: `["t", "q", "b", "f", "j", "o", "t", "l", "d"]`

**Hint:** Strings in Python work as if they were a tuple full of characters. How would you get the first element from a tuple or list?


### Solutions

**Part 1**

```python
# task_loops.py

ages = [5, 15, 64, 27, 84, 26]

odd_ages = [age for age in ages if age %2 != 0]
```

**Part 2**

```python
# task_loops.py

chicken_names = ["Hen Solo", "Cluck Norris", "Hennifer Lopez", "ChewPekka", "Feather Locklear"]

found_over_10 = [name for name in chicken_names if len(name) > 10]

found_h = [name for name in chicken_names if name[0].upper() == 'H']

print(found_over_10)
print(found_h)
```

**Part 3**

```python
# task_loops.py

words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
letters = [word[0].lower() for word in words]

print(letters)
```


## Conclusion

So we now have options to either write out a full for loop to give us a bit more control or use list comprehension to refactor our code into something more efficient. 

Whether you use for loops or comprehension is up to you. 