//enahced object literals 

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("Fabian", 30, "COL", 1));