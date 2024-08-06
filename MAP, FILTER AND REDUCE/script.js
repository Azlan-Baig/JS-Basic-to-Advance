// let arr =[10,20,30];
// let a = arr.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value + 2
// })

// console.log(a)


// let arr = [10,11,12,13,14,15]
// let filt = arr.filter((a)=>{
//      return a > 12
// })

// console.log(filt)

let arr = [10,10,10,20,20,20];

const reducfnc = (a,b)=>{
            return a +b ;
}


let newarr = arr.reduce(reducfnc);

console.log(newarr)
