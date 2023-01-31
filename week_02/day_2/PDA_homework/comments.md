# Class diagram

Submit a comment explaining your understanding of:

- The class diagram you’ve submitted and its use
- Design decisions made when producing the diagram

The class diagram shows a Restaurant class. This Restaurant has attributes containing lists of Tables and Employees, as well as a name and total cash. It also has methods to add cash, to get the total of the employee wages, get a list of employees by their job title, a list of the available tables, and a list of tables by the number of seats.
The Table class has attributes for it's table number, the number of people who can be seated at the table, whether it is available, which Employee has been assigned to serve the table, and the current total bill for the table. It also has methods for booking the table, changing the Employee serving, and changing the bill.
Lastly there is an Employee class which has attributes for the employee's name, their job title, hourly pay, and their normal weekly hours. It also has methods to calculate the employee's weekly and annual pay.

My design decisions were to start with the Restaurant class and then consider what properties a restaurant has which might be useful if I was making a program to help manage the restaurant. I decided that the main components would be the restaurant itself and the tables and employees.

# Object diagram

Submit a comment explaining your understanding of:

- The object diagrams you’ve submitted and their use
- Design decisions made when producing the diagram

The object diagram shows an example restaurant called Master of Buffets, one of its tables, and the employee Lars.

The design decisions for this diagram were made in the class diagram as I created that first.
