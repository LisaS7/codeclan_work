def get_menu_option():
    return input("Select an option 1, 2, 3, 4, 5, display (m)enu or (q)uit: ")

def get_description():
    return input("Enter task description to search for: ")

def get_time():
    return int(input("Enter task duration: "))

def get_task_details():
    return [input("Enter description: "), int(input("Enter time taken: "))]

def want_to_load_tasks():
    return input("Do you want to load existing data? Y/N ").lower()