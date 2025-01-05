------ CREATE ALL TABLES ------

-- CREATE TABLE: author
CREATE TABLE author (
	author_id INT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	surname VARCHAR(50) NOT NULL,
	birthdate DATE
);

-- CREATE TABLE: book
CREATE TABLE book (
	book_id INT PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	published DATE
);

-- CREATE TABLE: author_book
CREATE TABLE author_book (
	book_id INT,
	author_id INT,
	PRIMARY KEY (book_id, author_id),
	FOREIGN KEY (book_id) REFERENCES book(book_id)
		ON DELETE CASCADE,
	FOREIGN KEY (author_id) REFERENCES author(author_id)
		ON DELETE CASCADE
);

-- CREATE TABLE: member
CREATE TABLE member (
	member_id INT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	surname VARCHAR(50) NOT NULL
);

-- CREATE TABLE: member_contact
CREATE TABLE member_contact (
	contact_id INT PRIMARY KEY,
	member_id INT UNIQUE NOT NULL,
	phone VARCHAR(15),
	email VARCHAR(100),
	address VARCHAR(255),
	FOREIGN KEY (member_id) REFERENCES member(member_id)
		ON DELETE CASCADE
);

-- CREATE TABLE: loan
CREATE TABLE loan (
	loan_id INT PRIMARY KEY,
	member_id INT,
	book_id INT,
	loan_date DATE NOT NULL,
	return_date DATE NOT NULL,
	FOREIGN KEY (book_id) REFERENCES book(book_id)
		ON DELETE CASCADE,
	FOREIGN KEY (member_id) REFERENCES member(member_id)
		ON DELETE CASCADE
);
