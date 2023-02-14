import pdb
from models.task import Task
from models.user import User
import repositories.task_repository as task_repository
import repositories.user_repository as user_repository

task_repository.delete_all()
user_repository.delete_all()

user1 = User("Alec", "Steven")
user_repository.save(user1)
user2 = User("Spock", "TheCat")
user_repository.save(user2)

task1 = Task("Walk the dog", user1, 60)
task2 = Task("Feed the cat", user1, 10)
task3 = Task("Sleep", user2, 360)
task_repository.save(task1)
task_repository.save(task2)
task_repository.save(task3)

# for task in task_repository.select_all():
#     print(task)

for task in user_repository.tasks(user1):
    print(task)

pdb.set_trace()
