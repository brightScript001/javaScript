// //strings
// let firstName = "Success";
// let surName = "Bright";

// console.log(firstName);

// //string concatenation
// let fullName = firstName + " " + surName;
// console.log(fullName)

// //getting characters
// console.log(surName[3]);

// //string length
// console.log(fullName.length);

// //string methods//this methods they do not alter the original value.
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);


// let email = "yoggie@email.com";

// //let result = email.lastIndexOf('i');

// //let result = email.slice(7, 10);

// // let result = email.substr(0, 10);

// let result = email.replace('y', 'w');

// console.log(result);

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

//math operators +, -, *, /, **, %
//console.log(10 / 2);
// let result = radius % 3;

//let result = pi * radius ** 2;

//order of operation - BIDMAS

// let result = 5 * (10 - 3) ** 2;

// console.log(result);

// let likes = 10;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes)

//NaN not a number
// console.log(5 / "hello");

// let result = 'the blog has' + likes + 'likes'
// console.log(result);


//////////////////////////////////////////////


//template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

//concatenation way
// let result = 'The blog called ' + title + ' by ' + ' author ' + ' has ' + likes + ' likes ';
//

//template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result);

//creating html templates
// let html = `<h2>${title}</h2>
// <p>By ${author} </p>
// <span> This Blog has ${likes} likes </span>`
// console.log(html);

// let ninjas = ['praise', 'ovie', 'tejiri'];

// ninjas[1] = "kennedy"
// console.log(ninjas[1], ninjas)

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['praise', 'ovie', 30, 20]
// console.log(random);

// console.log(ninjas.length);

//array methods
// let result = ninjas.join(',');
// let result = ninjas.indexOf('tejiri');
// let result = ninjas.concat(["ken", "cystal"])
// let result = ninjas.push('ken');
//  result = ninjas.pop();
// console.log(result);

////////////////////////////////////////
//null & undefined

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

//booleans & comparisons
// console.log(true, false, "false", "true")

//methos can return booleans
// let email = 'luigi@email.com'
// let names = ['mario', 'luigi', 'toad']

// let result = email.includes('!');
// let result = names.includes('luigi')

// console.log(result)

//comparison operators
// let age = 25;
// console.log(age == 25);
// console.log(age == 35);
// console.log(age != 25);
// console.log(age != 35);
// console.log(age > 20);
// console.log(age > 20);
// console.log(age >= 20);
// console.log(age <= 20);

// let name = 'shan';
// console.log(name == 'shan');
// console.log(name == 'Shan');
// console.log(name > 'Shan');
// console.log(name < 'crystal');


/////////////////comparison///////////////////////

// let age = 25;

// loose comparison ( different types can still be equal)
// console.log(age == 25);
// console.log(age == "25");
// console.log(age != 25);
// console.log(age != "25");

// strict comparison ( different types can still be equal)
// console.log(age === 25);
// console.log(age === "25");
// console.log(age !== 25);
// console.log(age !== "25");

///// type conversion /////
// let score = "100";
// score = Number(score)
// console.log(score + 1);
// console.log(typeof score)

// let result = Number("hello");
// let result = String(50);
// let result = Boolean(0);
// let result = Boolean('')
// console.log(result, typeof result);

////////////////////////////////

// for loop

// for (let i = 0; i < 5; i++) {
//     console.log("in loop:", i);
// }
// console.log("loop finished ")

// const names = ['praise', 'tejiri', 'bright']
// for (let i = 0; i < names.length; i++) {
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
// }

/////// while loops
// let i = 0;
// while (i < 5) {
//     console.log("in loop:", i);
//     i++;
// }

// const names = ['praise', 'tejiri', 'bright', 'vitory', 'gift', 'ayo', 'godwin']
// let i = 2

// while (i < names.length) {
//     const html = `<div>${names[i]}</div>`
//     console.log(html)
//     i++
// }


/////// do loop

// let i = 5;
// do {
//     console.log("val of i is", i);
//     i++;
// } while (i < 5);

///////////////////
// if statements
// const age = 25;
// if (age > 20) {
//     console.log(`you are over 20 years old`)
// }

// const ninjas = ['praise', 'tejiri', 'bright', 'vitory', 'gift', 'ayo', 'godwin']
// if (ninjas.length > 5) {
//     console.log("That's alot of Ninjas")
// }

//if statements & logical operators
//OR || and AND &&

// const password = "fufu@1234567"

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is strong')

// } else if (password.length >= 8 || password.includes('@')) {
//     console.log('the password is long enough')
// } else {
//     console.log("password is not long enough")
// }

//logical NOT (!)
// let user = false;
// if (!user) {
//     console.log('you must be logged in to continue');
// }
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
    console.log('your score: ', scores[i]);
}