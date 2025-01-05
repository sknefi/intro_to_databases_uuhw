# Project Description

This project involves creating and managing a relational database for a library system. The database is designed to track information about authors, books, library members, and loans. It supports essential operations such as adding, retrieving, updating, and deleting records, ensuring data consistency through foreign key constraints, and optimizing queries with indexing.

# Conceptual Model
### The library system revolves around four core entities:

+ **Author** - Represents authors who write books
+ **Book** - Represents books written by authors
+ **Author-Book** - A linking table that models the N:M relationship between authors and books
+ **Member** - Represents library members who can loan books
+ **Member Contact** - Stores contact information for each library member
+ **Loan** - Tracks loans of books to members

### Relationships:

+ **One-to-One (1:1):**
> Each Member has one associated Member Contact entry that stores additional details such as phone, email, and address.
+ **One-to-Many (1:N):**
> An Author can write multiple Books, creating a 1:N relationship between author and book. This relationship is facilitated by the author_book linking table to allow multiple authors per book.
A Member can have multiple Loans, representing a 1:N relationship between member and loan.
+ **Many-to-Many (M:N):**
> An Author can write multiple Books, and a Book can have multiple Authors. This is implemented via the author_book linking table.
A Member can borrow multiple Books through Loans, and a Book can be loaned to multiple Members over time. This is represented by the loan table.


# Summary
This database models the relationships between authors, books, members, loans, and member contact information in a library system. The system supports advanced features like views and constraints, ensuring that data remains consistent and queries are optimized. Additionally, indexing helps improve query performance, while cascading updates and deletes maintain data integrity when records are modified or removed.