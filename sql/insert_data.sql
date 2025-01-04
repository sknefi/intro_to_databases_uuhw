------ INSERT data to database ------

-- INSERT DATA: author
INSERT INTO author (author_id, name, surname, birthdate) 
VALUES (1, 'Robert', 'Kiyosaki', '1947-04-08');

-- INSERT DATA: book
INSERT INTO book (book_id, author_id, title, published) 
VALUES (1, 1, 'Rich Dad Poor Dad', '1997-04-01');

-- INSERT DATA: member
INSERT INTO member (member_id, name, surname) 
VALUES (1, 'Palo', 'Habera');

-- INSERT DATA: member_contact
INSERT INTO member_contact (contact_id, member_id, phone, email, address) 
VALUES (1, 1, '123-456-7890', 'palo.habera@example.com', '123 Library St');

-- INSERT DATA: loan
INSERT INTO loan (loan_id, member_id, book_id, loan_date, return_date) 
VALUES (1, 1, 1, '2023-01-15', '2023-02-15');
