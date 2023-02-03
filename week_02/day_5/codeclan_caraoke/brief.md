## The OO CodeClan Caraoke (CCC)

:star: This is a PDA Homework :star:

You have been approached to build software for a Karaoke bar. Specifically, they want you to build a software for checking guests in and out, plus handling songs.

Your program should be test driven and should be able to:

- Create rooms, songs and guests
- Check in guests to rooms/Check out guests from rooms
- Add songs to rooms

### Extensions

- What happens if there are more guests trying to be checked in than there is free space in the room?
- Karaoke venues usually have an entry fee - So the guests could have money so they can pay it.

### Advanced extensions

- Guests could have a favourite song, and if their favourite song is on the room's playlist, they can cheer loudly! (return a string like "Whoo!")
- Rooms can keep track of the entry fees/spending of the guests - maybe add a bar tab/bar class?
- Add anything extra you think would be good to have at a karaoke venue!

### Getting Started

1. Create a new directory for your homework called codeclan_caraoke
2. Create a .gitignore file in this directory and paste the following into it:

```
__pycache__
```

3. Create a file called `run_tests.py` and paste the following code into it:

```python
import unittest
from tests.guest_test import TestGuest
from tests.room_test import TestRoom
from tests.song_test import TestSong

if __name__ == '__main__':
    unittest.main()
```

4. Create a `tests` directory and a `classes` directory.
5. To run the tests in Terminal type

```bash
python3 run_tests.py
```

### PDA Reminder:

As part of this homework you are required to take screenshots of the following (if not done already):

```
- A list in a program
- A function that uses the list
- The result of the function running
```

```
- A dictionary in a program
- A function that uses the dictionary
- The result of the function running
```

(You may not make a dictionary in this homework, but you could just create a little example program to demonstrate the above)

- Submit your PDA evidence (screenshots, etc.) to Canvas

- PDA Reference: I.T.5, I.T.6
