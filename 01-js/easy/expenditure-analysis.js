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

function calculateTotalSpentByCategory(transactions) {
  const n=transactions.length
  var obj = {}
  for(let i=0;i<n;i++){
    if(transactions[i].category in obj){
      obj[transactions[i].category]+=transactions[i].price;
    }
    else{
      obj[transactions[i].category]=transactions[i].price;
    }
  }
  //console.log(obj)
  res=[]
  for(var some in obj){
    let newobj={}
    newobj.category=some;
    newobj.totalSpent=obj[some];
    res.push(newobj);
    //console.log(newobj)
  }
  console.log(res)
  return res;
}

module.exports = calculateTotalSpentByCategory;
