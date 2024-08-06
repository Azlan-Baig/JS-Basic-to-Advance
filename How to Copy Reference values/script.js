let a = [2,3,4,5,6,7];


let b =[...a];

b.pop();
console.log(a)
console.log(b)


let obj = {
    name: "Azlan Ali Baig",
    ID : 18379,
}

let obj1 ={...obj};
obj1.ID=18377;
console.log(obj)
console.log(obj1)