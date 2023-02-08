from models.book import Book
from models.order import Order

book1 = Book("Order of the Phoenix", "JK Rowling")
book2 = Book("The Raven", "Edgar Allan Poe")

order1 = Order("John", "08/02/23", 3, book1)
order2 = Order("Mike", "05/01/23", 1, book2)

orders = [order1, order2]
