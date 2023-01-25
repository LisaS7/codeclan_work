# 1. Create an empty list called `task_list`
task_list = []

# 2. Add a few `str` elements, representing some everyday tasks e.g. 'Make Dinner'
task_list.extend(["feed cat", "laundry", "cook dinner"])
task_list.append("shower")

# 3. Print out `task_list`
print(task_list)

# 4. Remove the last task
task_list.pop()

# 5. Print out `task_list`
print(task_list)

# 6. Print out the number of elements in `task_list`
print(len(task_list))
