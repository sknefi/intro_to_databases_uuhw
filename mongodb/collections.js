// Create collection author with one document
db.author.insertMany([
	{ _id: 1, name: "Robert", surname: "Kiyosaki", birthdate: new Date("1947-04-08") }
]);

// Create collection book with one document
db.book.insertMany([
	{ _id: 1, author_id: 1, title: "Rich Dad Poor Dad", published: new Date("1997-04-01") }
]);

// Create collection member with one document
db.member.insertMany([
	{ _id: 1, name: "Palo", surname: "Habera" }
]);

// Create collection loan with one document
db.loan.insertMany([
	{ _id: 1, member_id: 1, book_id: 1, loan_date: new Date("2023-01-15"), return_date: new Date("2023-02-15") }
]);
  