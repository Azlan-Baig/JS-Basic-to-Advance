console.log(typeof([]))

let arr = [10,20,30,40]
arr[-1] = 50
arr[-2] = 80

console.log(arr);

console.log(Array.isArray([])); //Returns true
console.log(Array.isArray({})); //Returns false