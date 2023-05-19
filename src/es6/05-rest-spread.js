/*Existen dos tipos de expresiones de asignacion de destructuración, las que vanna trabajar con Arrays 
y las que van a trabajar con objetos*/


//Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring
let user = {username: 'Fabian', age: 31};
let { username, age } = user;
console.log(username, user.age);



//Spread Operator

let person = {name: 'Fabian', age: 31}; 
let country = 'COL';

let data = { ...person, country };
console.log(data);

//parametros REST
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);