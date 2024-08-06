// let obj = {
//     a: 1,
//     b: "Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){ //Constructor is used to create the objects of the classes.
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}

// let a = new Animal("Bakri");
// console.log(a)

// class Lion extends Animal{

// }

// let l = new Lion("Shera")
// console.log(l)


// Ab agar me chahta hun k me lion ki class banao or animal ki properties inherit karo jesa uppar kia hai magar constructor separate banaon to dekho esay banayga..
// class Lion extends Animal{
//     constructor(name){ //Constructor is used to create the objects of the classes.
//     super(name)
//         console.log("Object is created and this is a lion...")
//     }
// }

// let l = new Lion("SHERAAA!")
// console.log(l)

class Lion extends Animal {
    constructor(name){
        super(name) 
        console.log("Object is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l.eats())