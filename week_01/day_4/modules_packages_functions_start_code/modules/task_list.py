

# Functions to complete:

## Get a list of uncompleted tasks
def get_uncompleted_tasks(tasks):
    # uncompleted_tasks = []
    # for task in tasks:
    #     if task["completed"] == False:
    #         uncompleted_tasks.append(task)
    # return uncompleted_tasks
    return get_tasks_by_status(tasks, False)

## Get a list of completed tasks
def get_completed_tasks(tasks):
    # completed_tasks = []
    # for task in tasks:
    #     if task["completed"] == True:
    #         completed_tasks.append(task)
    # return completed_tasks
    return get_tasks_by_status(tasks, True)

## Get tasks where time_taken is at least a given time
def get_tasks_taking_at_least(tasks, time):
    long_tasks = []
    for task in tasks:
        if task["time_taken"] >= time:
            long_tasks.append(task)
    return long_tasks

## Find a task with a given description
def get_task_with_description(tasks, description):
    output_task = None
    for task in tasks:
        if task["description"] == description:
            output_task = task
    return output_task

# Extention (Function): 

## Get a list of tasks by status
def get_tasks_by_status(tasks, status):
    tasks_by_status = []
    for task in tasks:
        if task["completed"] == status:
            tasks_by_status.append(task)
    return tasks_by_status

def mark_task_complete(task):
    task["completed"] = True

def create_task(description, time_taken):
    task = {}
    task["description"] = description
    task["completed"] = False
    task["time_taken"] = time_taken

    return task

def add_to_list(list, task):
    list.append(task)




