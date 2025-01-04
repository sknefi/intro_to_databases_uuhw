// CREATE COLLECTIONS AND INSERT DOCUMENTS

// These are just examples of ObjectId values
const AUTHOR_ID = "31292038f911de352ed861e4a";
const MEMBER_ID = "67790038f93dd352cd861b7c";
const BOOK_ID = "a1797018f93dc352cdf61ee9";

// Create collection author with one document
db.author.insertOne({
  name: "Robert",
  surname: "Kiyosaki",
  birthdate: new Date("1947-04-08"),
  books: [] // This field will be populated with the ObjectId of the book document
});

// Create collection book with one document
db.book.insertOne({
  author_id: AUTHOR_ID,
  title: "Rich Dad Poor Dad",
  published: new Date("1997-04-01"),
});

// Create collection member with one document
db.member.insertOne({
  name: "Palo",
  surname: "Habera",
  contact: {
    phone: "123-456-7890",
    email: "palo.habera@example.com",
    address: "123 Random Street, Random City, 12345",
  },
});

// Create collection loan with one document
db.loan.insertOne({
  member_id: AUTHOR_ID,
  book_id: BOOK_ID,
  loan_date: new Date("2023-01-15"),
  return_date: new Date("2023-02-15"),
});
