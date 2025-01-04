# Project Description

This project involves creating and managing a relational database for a library system. The database is designed to track information about authors, books, library members, and loans. It supports essential operations such as adding, retrieving, updating, and deleting records, ensuring data consistency through foreign key constraints, and optimizing queries with indexing.

# Conceptual Model
### The library system revolves around four core entities:

+ Author - Represents authors who write books
+ Book - Represents books written by authors
+ Member - Represents library members who can loan books
+ Member Contact - Stores contact information for each library member
+ Loan - Tracks loans of books to members

### Relationships:

+ An Author can write multiple Books (1:N relationship between author and book)
+ A Member can borrow multiple Books through Loans (M:N relationship, implemented via the loan table)
+ A Member Contact entry corresponds to each Member and stores additional details such as phone, email, and address (1:1 relationship)
+ Each Loan links a Member to a specific Book and contains details of the borrowing event, including loan date and return date

# Summary
This database models the relationships between authors, books, members, loans, and member contact information in a library system. The system supports advanced features like views and constraints, ensuring that data remains consistent and queries are optimized. Additionally, indexing helps improve query performance, while cascading updates and deletes maintain data integrity when records are modified or removed.