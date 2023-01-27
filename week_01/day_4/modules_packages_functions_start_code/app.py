import modules.output as output
import modules.input as user_input
import modules.task_list as task_list

user_wants_to_load_tasks = user_input.want_to_load_tasks()
if user_wants_to_load_tasks == "y":
    import data.task_list as data
    task_data = data.tasks
elif user_wants_to_load_tasks == "n":
    task_data = []

while (True):
    output.print_menu()
    # option = input("Select an option 1, 2, 3, 4, 5, display (m)enu or (q)uit: ")
    option = user_input.get_menu_option()
    if (option.lower() == 'q'):
        break
    if option == '1':
        output.print_list(task_data)
    elif option == '2':
        output.print_list(task_list.get_uncompleted_tasks(task_data))
    elif option == '3':
        output.print_list(task_list.get_completed_tasks(task_data))
    elif option == '4':
        # description = input("Enter task description to search for: ")
        description = user_input.get_description()
        task = task_list.get_task_with_description(task_data, description)
        if task is not None:
            task_list.mark_task_complete(task)
            print("Task marked complete")
        else:
            print("Task not found")
    elif option == '5':
        # time = int(input("Enter task duration: "))
        time = int(user_input.get_time())
        output.print_list(task_list.get_tasks_taking_at_least(task_data, time))
    elif option == '6':
        # description = input("Enter task description to search for: ")
        description = user_input.get_description()
        print(task_list.get_task_with_description(task_data, description))
    elif option == '7':
        # description = input("Enter description: ")
        # time_taken = int(input("Enter time taken: "))
        description, time_taken = user_input.get_task_details()
        task = task_list.create_task(description, time_taken)
        task_data.append(task)
    else:
        print("Invalid Input - choose another option")
