function abcd(){
    console.log(this.name)
}
let obj = {
    name:'Azlan',
    Age:22
}
abcd.call(obj)