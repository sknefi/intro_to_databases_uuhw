------ MAIN SUBJECT: Library Database ------ 

-- PROJECTION & SELECTION of members who have loaned books
SELECT DISTINCT member.name, member.surname
FROM member
JOIN loan ON member.member_id = loan.member_id;

-- SELECTION CRITERIA of books loaned in 2023
SELECT book.title, loan.loan_date, loan.return_date
FROM book
JOIN loan ON book.book_id = loan.book_id
WHERE loan.loan_date BETWEEN '2023-01-01' AND '2023-12-31';

-- SUBQUERY to find books by author 'Kiyosaki'
SELECT title
FROM book
WHERE author_id = (
	SELECT author_id
	FROM author
	WHERE surname = 'Kiyosaki'
);

-- SUBQUERY to find members who have not loaned books
SELECT name, surname
FROM member
WHERE member_id NOT IN (
	SELECT member_id FROM loan
);

-- AGGREGATION & SORTING of loans per member
SELECT member.name, member.surname, COUNT(loan.loan_id) AS loan_count
FROM member
JOIN loan ON member.member_id = loan.member_id
GROUP BY member.name, member.surname
ORDER BY loan_count DESC;

------ SOME BONUSES ------ 

-- INDEXING of book titles
CREATE INDEX idx_book_title ON book(title);

-- CONSTRAINT to ensure unique book titles per author
ALTER TABLE book
ADD CONSTRAINT unique_title_author UNIQUE (title, author_id);

-- VIEW of active loans
CREATE VIEW active_loans AS
SELECT
	loan.loan_id,
	member.name AS member_name,
	member.surname AS member_surname,
	book.title AS book_title,
	loan.loan_date,
	loan.return_date
FROM loan
JOIN member ON loan.member_id = member.member_id
JOIN book ON loan.book_id = book.book_id
WHERE loan.return_date > CURRENT_DATE;
