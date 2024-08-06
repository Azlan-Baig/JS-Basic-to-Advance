// === is called the strict equality Operator

console.log(1=='1')  //Returns true, "==" sign converts the type of the object so that both the objects can be same
console.log(1==='1')  //Returns false
console.log(0=='') //returns true :/ 
console.log(0==false) //Sadly also returns true :(
console.log(0==='')    
console.log(0===false)    

console.log(null==undefined) // returns true, only use case where == equal should be used.
console.log(1 != '1') //Returns false, although it should return true, cuz number (1) is not equal to string  "1"
console.log(1 !== '1')