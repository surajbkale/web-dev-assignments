/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// // solution using map and forEach
// function calculateTotalSpentByCategory(transactions) {
//   const categoryMap = new Map();

//   transactions.forEach((transaction) => {
//     const category = transaction.category;
//     const price = transaction.price;

//     if (categoryMap.has(category)) {
//       categoryMap.set(category, categoryMap.get(category) + price);
//     } else {
//       categoryMap.set(category, price);
//     }
//   });

//   // convert map to desired array of objects
//   const result = [];
//   for (let [category, totalSpent] of categoryMap) {
//     result.push({ category, totalSpent });
//   }

//   return result;
// }

// solution using reduce
function calculateTotalSpentByCategory(transactions) {
  const categoryMap = transactions.reduce((map, transaction) => {
    const { category, price } = transaction;
    map[category] = (map[category] || 0) + price;
    return map;
  }, {});

  // Convert plain object to array of objects
  return Object.entries(categoryMap).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;
