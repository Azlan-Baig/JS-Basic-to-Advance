// LEXICAL SCOPING.


// function outer (){
//     let username = "azlan"
//     function inner(){
//         console.log(username)
//     }
//     inner()
// }
// outer()
function outer (){
    let username = "azlan"
    function inner(){
        console.log(username)
    }
    return inner;
}
// outer()()
// let fnc = outer()
// fnc()

// Storing in a Variable: let fnc = outer(); allows you to store the returned inner function and call it later with fnc().
// Direct Invocation: outer()(); calls the outer function and immediately calls the inner function it returns.
// Both methods work, but storing the function in a variable can be useful if you need to call the inner function multiple times later.





//Here is the practical example of Closures.
function handleClick(color){
    // document.body.style.backgroundColor = color;
    return function(){

        document.body.style.backgroundColor = `${color}` 
    }
}

document.getElementById('green').onclick = handleClick("green")
