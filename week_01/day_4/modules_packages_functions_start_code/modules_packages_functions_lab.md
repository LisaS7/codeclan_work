# Lab - Modules, Packages and Functions

**Lab Duration: 120+ minutes**

## Learning Objectives
- Practice writing functions to encapsulate code
- Practice breaking down code into modules and packages

In the start code, `task_list.py` contains a program for managing a task list. It has several functions (some incomplete) for maintaining and displaying the list, and a main loop for running the actual program.

The `tasks` data is modelled as a list of dictionaries:

```python
tasks = [
    { "description": "Wash Dishes", "completed": False, "time_taken": 10 },
    { "description": "Clean Windows", "completed": False, "time_taken": 15 },
    { "description": "Make Dinner", "completed": True, "time_taken": 30 },
    { "description": "Feed Cat", "completed": False, "time_taken": 5 },
    { "description": "Walk Dog", "completed": True, "time_taken": 60 },
]
```

# Part 1

## Functions

In `task_list.py` complete the following functions by replacing ```pass``` with your own code:

```py
## Get a list of uncompleted tasks
def get_uncompleted_tasks(list):
    pass

## Get a list of completed tasks
def get_completed_tasks(list):
    pass

## Get tasks where time_taken is at least a given time
def get_tasks_taking_at_least(list, time):
    pass

## Find a task with a given description
def get_task_with_description(list, description):
    pass
```

## Extension

Complete `get_tasks_by_status()` and refactor `get_uncompleted_tasks()` and `get_completed_tasks()` to use this function:

```py
## Get a list of tasks by status
def get_tasks_by_status(list, status):
    pass
```

# Part 2

Now your task is to take the code in the file and break it down into modules and packages.

## Modules

1. Create a file `app.py` and move the main `while` loop into this file.

2. Create another file, called `output.py`. Move all the functions from `task_list.py` which perform no logic, but purely display information to the terminal (e.g. `print_task()`, `print_list()`, `print_menu()`) into `output.py`

3. Add `import` statements to `app.py` to import the code from `task_list.py` and `output.py`. Test your code works by running `app.py`

## Packages

1. Create a package called `modules` and move `task_list.py` and `output.py` into this package. Modify the `import` statements in `app.py` so that they import the modules from this package.

2. Create an empty file called `__init__.py` in your package.

## Extensions

1. Create a package called `data`. Inside this package create a file called `task_list.py`. Move the following code from the original `task_list.py` file into this file:

	```python
	tasks = [
    	{ "description": "Wash Dishes", "completed": False, "time_taken": 10 },
    	{ "description": "Clean Windows", "completed": False, "time_taken": 15 },
    	{ "description": "Make Dinner", "completed": True, "time_taken": 30 },
    	{ "description": "Feed Cat", "completed": False, "time_taken": 5 },
    	{ "description": "Walk Dog", "completed": True, "time_taken": 60 },
	]
	```

2. Add another `import` statement to `app.py` to import the code from this module. (Remember to add your empty `__init__.py` file to your package).

3. In the main loop in `app.py` there is code which gets input from the user. Create a new module in the `modules` package called `input.py`. Move the `input` statements in `app.py` to functions in the the `input.py` module.  Modify the code in `app.py` so that the `input` statements are replaced with calls to functions in `input.py`.

## Advanced Extension

Add code to `app.py` which asks the user if they want to load some tasks which have already been created. Make the `import` of the `tasks` from the module in the `data` package conditional so that it only imports the code if the user wants to. Otherwise the `tasks` list should start empty.

## Notes

Remember to `git commit` regularly. Before you do any commits you should create a `.gitignore` file which includes `__pycache__`.


