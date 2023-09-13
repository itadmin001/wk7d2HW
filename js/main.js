//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let yoMama = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let dynDiv = document.getElementById('dynamic')
for(let ass in Object.values(yoMama)){
    dynDiv.innerHTML+= "<h5 class='mt-3 text-decoration-underline'>"+Object.entries(yoMama)[ass][0]+"</h5>"
    
    if(Array.isArray(Object.values(yoMama)[ass])){
        for(value of Object.values(yoMama)[ass]){
            if(typeof value === 'object') {
                for (const [key, v] of Object.entries(value)) {
                    dynDiv.innerHTML +=`<li style="list-style-type:none;"><strong>${key}</strong>: ${v}</li>`;
                }
             
            }else{
                dynDiv.innerHTML+= `<li style="list-style-type:none;">${value}</li>`
            }
        }

    }else{
        dynDiv.innerHTML+= `<li style="list-style-type:none;">${Object.values(yoMama)[ass]}</li>`
    }
    
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor(name,age){
        this.name = name
        this.age = age

    }

    increaseAgeByOne = () =>{
        return this.age++
    }

    printinfo = () =>{
        return `Name: ${this.name} \nAge: ${this.age}`
    }
}

let dynDiv2 = document.getElementById('dynamicPerson')

let john = new Person('John',25)
dynDiv2.innerHTML+=`<h3> Person 1: ${john.name}, ${john.age}</h3>`
dynDiv2.innerHTML+="<h6>...John has suddenly and mysteriously aged 3 years...</h6>"
for(let count=1;count<=3;count++){john.increaseAgeByOne()}
dynDiv2.innerHTML+=`<h3>${john.name}, ${john.age}</h3>`
console.log(john.printinfo())

let jane = new Person('Jane',40)
dynDiv2.innerHTML+=`<h3>Person 2: ${jane.name}, ${jane.age}</h3>`

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let btn = document.getElementById('clickMe')

const coolStringChecker = (str) => {
    return new Promise((resolve,reject) => {
        if(str.length > 10){
            resolve(str)
        } else {
            reject(str)
        }
    })
}

function promiseFunc(){
    let inpt = prompt("Input a phrase to see how cool you are: ")
    coolStringChecker(inpt)
    .then((resolve) =>{
        alert("Wicked string man greater than 10")
    }).catch((error) =>{
        alert("Lazy bastard...it's not even 10 characters long")
    })
}


btn.onclick = function(){promiseFunc()}


/* Code Wars */

let sheep = [true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]

function CountSheep(arr){
    let counter=0
    for(let i=0;i<=arr.length;i++){
        if(arr[i] === true){
            counter++
        }
    }
    console.log(counter)
}
CountSheep(sheep)

function hammingWeight(x){
    let binary =''
    while (x > 0) {
        if (x % 2 == 1) {
        binary = "1" + binary;
        } else {
        binary = "0" + binary;
        }
        x = Math.floor(x / 2);
    }
        console.log((binary.match(/1/g)).length)
}
hammingWeight(10)