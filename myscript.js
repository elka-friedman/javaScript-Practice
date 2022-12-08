///console.log("I am so super cool!");
///console.log("My name is Elka");

///const firstName = "elka";
///const lastName = "friedman";

///console.log(firstName + ' ' + lastName);

///const favColor = 'green', favNumber = 18;
///console.log(favColor, favNumber)
///let product; 
///product = 3 * 5;
///console.log(product);

///let myString = 'This is not a string'
///let newString = myString.replace('not','')
///console.log(myString);
///console.log(newString);
///let myNum = 7;
///let myNewNum = (myNum += 1);
///console.log(myNewNum);

///let num = 4;
///if (num > 100){
///    console.log(`${num} is greater than 100`);
///} else if (num == 100) {
///    console.log(`${num} is 100`);
///    }
/// else if (num < 100) {
///    console.log(`${num} is less than 100`);
///} 

console.log(`ten is less than 20. true or false? ${10<20}`)
console.log(1==="1")

if (70!=1000) {
    console.log(`These numbers are different`);
} 
else if (100===100) {
    console.log(`These are the same numbers`);
}
else {
    console.log(`These are different.`);
}

///array

fruits = ['Banana', 'Mango', 'Apple'];
console.log(fruits.length);
console.log(fruits[1]);
fruits[3]='Grapes';
console.log(fruits[3]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
let last = fruits.length -1;
fruits[last + 1]  = 'Kiwi'
console.log(fruits);
fruits.push('Cherry');
console.log(fruits);
fruits.pop();
console.log(fruits);
let newArray = fruits.slice(2,5);
console.log(newArray, newArray.length);
console.log(fruits.indexOf('Apple'));
console.log("")

///loops

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let n = 0;
while (n <= 10) {
    console.log(n)
    n++;
}

let p = 0;
do{
    console.log(p);
        p++;
}while (p < 10);