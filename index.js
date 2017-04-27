import {createProfile} from './profile';
import {Profile} from './profile';

let myProfile = {
    name : "Nak",
    age : 44
};
function display({name,age}){
    // console.log("My name is " + name + " i'm " + age + " years old");
    console.log(`My name is "  ${name} i'm ${age}  years old`);
}
// display(myProfile);

let fruits = ["Apple","Banana","Orange"];

// Arrow #1
fruits.forEach((fruit) =>{
    console.log(fruit);
});
// Arrow #2
fruits.forEach(fruit =>console.log(fruit));

let num = [7,4,9,3,5,99];
num.sort((a,b) => a-b);
console.log(num);


//---------------Call import function
let profile = createProfile();
console.log(profile);

//-------------- Call Class ----
let myprofile = new Profile("Nak",46);
console.log(myprofile.greeting());

document.getElementById("app").innerText = myprofile.greeting();