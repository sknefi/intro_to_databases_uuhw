// Projection and selection of members who have taken a loan
db.loan.aggregate([
	{
	$lookup: {
		from: "member",
		localField: "member_id",
		foreignField: "_id",
		as: "member_details"
	  }
	},
	{
	$project: {
		"member_details.name": 1,
		"member_details.surname": 1
	  }
	},
	{ $unwind: "$member_details" },
	{ $group: { _id: "$member_details" } }
]);
  
// Selection criteria for books borrowed in 2023
db.loan.aggregate([
	{
	$lookup: {
		from: "book",
		localField: "book_id",
		foreignField: "_id",
		as: "book_details"
	  }
	},
	{
	$match: {
		loan_date: { $gte: new Date("2023-01-01"), $lte: new Date("2023-12-31") }
	  }
	},
	{
	$project: {
		"book_details.title": 1,
		loan_date: 1,
		return_date: 1
	  }
	}
]);

// Subquery for books written by Kiyosaki
db.book.find({
	author_id: db.author.findOne({ surname: "Kiyosaki" })._id
});

// Subquery for members who have not borrowed a book
db.member.find({
	_id: { $nin: db.loan.distinct("member_id") }
});

// Aggregation and sorting of members who have borrowed the most books
db.loan.aggregate([
	{
	$lookup: {
		from: "member",
		localField: "member_id",
		foreignField: "_id",
		as: "member_details"
	  }
	},
	{
	$group: {
		_id: "$member_id",
		loan_count: { $sum: 1 },
		member_name: { $first: "$member_details.name" },
		member_surname: { $first: "$member_details.surname" }
	  }
	},
	{ $sort: { loan_count: -1 } },
	{
	$project: {
		member_name: 1,
		member_surname: 1,
		loan_count: 1
	  }
	}
]);

// SOME BONUSES

// Index creation for the author collection
db.book.createIndex({ title: 1 });

// Index creation for unique books by title and author
db.book.createIndex({ title: 1, author_id: 1 }, { unique: true });

// Active loans view
db.loan.aggregate([
	{
	$lookup: {
		from: "member",
		localField: "member_id",
		foreignField: "_id",
		as: "member_details"
	  }
	},
	{
	$lookup: {
		from: "book",
		localField: "book_id",
		foreignField: "_id",
		as: "book_details"
	  }
	},
	{
	$match: {
		return_date: { $gt: new Date() }
	  }
	},
	{
	$project: {
		loan_id: 1,
		"member_details.name": 1,
		"member_details.surname": 1,
		"book_details.title": 1,
		loan_date: 1,
		return_date: 1
	  }
	}
  ]);
  