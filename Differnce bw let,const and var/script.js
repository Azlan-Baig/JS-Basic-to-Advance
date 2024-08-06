// Var jo hai wo function scoped hai means wo function me kahein bh use ho jayega, lekin agar var ki jaga let ya const huta to wo srf ek brace"{}" k andar use huta q k let and const braces scoped hutey hain.

const abcd = () =>{

for(var i=1; i<10;i++){
console.log(i)
}
// console.log(i)
}

abcd();