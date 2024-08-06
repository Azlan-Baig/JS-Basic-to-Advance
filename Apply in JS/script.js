function abcd(a,b,c,d,e){
    console.log(this,a,b,c,d,e)
}

let obj = {
    name:"Azlan",
    ID:18379
}

abcd.apply(obj,[10,20,30,40,50])