// Matlab HOF wo hutey hain jo functions ko as a paramaters accept kartay hain ya phr apnay andar se function return kartay hain
let abcd = ()=>{
    return a = ()=> {
        console.log("This is an example of HOF");
        a();
    }
    
}

abcd()

let efgh = (val)=>{
    val();
};


efgh(()=>{
console.log("THIS IS HOF!!!")
})