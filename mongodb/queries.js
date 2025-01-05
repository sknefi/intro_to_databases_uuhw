// MAIN SUBJECT: Library Database

// Projection and selection of members who have taken a loan
db.member.aggregate([
  {
    $lookup: {
      from: "loan",
      localField: "_id",
      foreignField: "member_id",
      as: "loans",
    },
  },
  { $match: { loans: { $ne: [] } } },
  { $project: { name: 1, surname: 1 } },
]);

// Selection criteria for books borrowed in 2023
db.loan.aggregate([
  {
    $lookup: {
      from: "book",
      localField: "book_id",
      foreignField: "_id",
      as: "book_info",
    },
  },
  { $unwind: "$book_info" },
  {
    $match: {
      loan_date: { $gte: new Date("2023-01-01"), $lte: new Date("2023-12-31") },
    },
  },
  { $project: { title: "$book_info.title", loan_date: 1, return_date: 1 } },
]);

// Subquery for books written by Kiyosaki
db.book.aggregate([
  {
    $lookup: {
      from: "author",
      localField: "author_id",
      foreignField: "_id",
      as: "author_info",
    },
  },
  { $unwind: "$author_info" },
  { $match: { "author_info.surname": "Kiyosaki" } },
  { $project: { title: 1 } },
]);

// Subquery for members who have not borrowed a book
db.member.aggregate([
  {
    $lookup: {
      from: "loan",
      localField: "_id",
      foreignField: "member_id",
      as: "loans",
    },
  },
  { $match: { loans: { $size: 0 } } },
  { $project: { name: 1, surname: 1 } },
]);

// Aggregation and sorting of members who have borrowed the most books
db.loan.aggregate([
  {
    $lookup: {
      from: "member",
      localField: "member_id",
      foreignField: "_id",
      as: "member_info",
    },
  },
  { $unwind: "$member_info" },
  {
    $group: {
      _id: { name: "$member_info.name", surname: "$member_info.surname" },
      loan_count: { $sum: 1 },
    },
  },
  { $sort: { loan_count: -1 } },
]);

// SOME BONUSES

// Index creation for the author collection
db.book.createIndex({ title: 1 });

// Index creation for unique books by title and author
db.book.createIndex({ title: 1, author_id: 1 }, { unique: true });

// Active loans selection
db.loan.find({ return_date: { $gt: new Date() } });

// Active loans view
db.loan.aggregate([
  {
    $lookup: {
      from: "member",
      localField: "member_id",
      foreignField: "_id",
      as: "member_info",
    },
  },
  { $unwind: "$member_info" },
  {
    $lookup: {
      from: "book",
      localField: "book_id",
      foreignField: "_id",
      as: "book_info",
    },
  },
  { $unwind: "$book_info" },
  { $match: { return_date: { $gt: new Date() } } },
  {
    $project: {
      loan_id: 1,
      member_name: "$member_info.name",
      member_surname: "$member_info.surname",
      book_title: "$book_info.title",
      loan_date: 1,
      return_date: 1,
    },
  },
]);
