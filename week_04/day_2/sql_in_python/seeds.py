import pdb
from models.task import Task
import repositories.task_repository as task_repository

# Clear seed data
task_repository.delete_all()

task1 = Task("Walk Dog", "Jack", 60)
task2 = Task("Feed cat", "Victor", 5)
task_repository.save(task1)
task_repository.save(task2)

result = task_repository.select_all()

for task in result:
    print(task.__dict__)

print(task_repository.select(task1.id))

# pdb.set_trace()
