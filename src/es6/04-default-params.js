function newUser(name, age, country){
    var name = name || 'Fabián';
    var age = age || 31;
    var country = country || 'COL';
    console.log(name, age, country);
}

newUser(); 
newUser('Angie', 35, 'COL')

function newAdmin(name = 'Andres', age = 30, country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'MX');