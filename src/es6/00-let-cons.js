var lastName = 'Nunez';
lastName = 'Pinzon';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () =>{
    if(true){
        var fruit1 = 'Apple'; //Function scope 
        let fruit2 = 'Kiwi'; // Block Scope
        const fruit3 = 'Banana'; // Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();