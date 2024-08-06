// let promises = new Promise((res, rej) => {
//     if (false) {
//         return res();
//     }
//     else {
//         return rej();
//     }
// })

// promises
//     .then(() => {
//         console.log("Resloved")
//     })
//     .catch(() => {
//         console.log("Rejected")

//     })


let promises = new Promise((res, rej) => {

    let n = prompt("Enter a number")
    if (n>=5) {
        return res();
    }
    else {
        return rej();
    }
})

promises
    .then(() => {
        console.log("Resloved")
    })
    .catch(() => {
        console.log("Rejected")

    })


