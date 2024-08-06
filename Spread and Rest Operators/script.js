// This is the usage of a spread operator
let arr = [1,2,5];

let newarr =[...arr]
newarr.pop()
console.log(arr);
console.log(newarr);

let restOpfunc = (a,b,c,...d)=>{
    console.log(a,b,c,d)
}

restOpfunc(10,20,30,40,50,60,70);
