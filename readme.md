# Project Description

This project involves creating and managing a relational database for a library system. The database is designed to track information about authors, books, library members, and loans. It supports essential operations such as adding, retrieving, updating, and deleting records, ensuring data consistency through foreign key constraints, and optimizing queries with indexing.

# Conceptual Model
### The library system revolves around four core entities:

+ Author - Represents authors who write books
+ Book - Represents books written by authors
+ Member - Represents library members who can loan books
+ Loan - Tracks loans of books to members

### Relationships:

+ An Author can write multiple Books (1:N)
+ A Member can borrow multiple Books through Loans (M:N implemented via loan)
+ Each Loan links a Member to a specific Book and contains details of the borrowing event

# Summary
This database efficiently models the relationships between authors, books, members, and loans in a library system. It enforces data integrity with constraints, optimizes queries using indexes, and supports advanced features like views for easy reporting.