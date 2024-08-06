function efgh(){
    console.log(this)
}

let obj = {
    name:"Azlan"
}

let bindfunc = efgh.bind(obj)
bindfunc()