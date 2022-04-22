/*var myAge
var year
function calculateAge(birthYear){                               // this is a function which will calculate the age 
    let age = 2022 - birthYear;
    return age
} 
myAge = calculateAge(1997);                                // a variable in whihch function will be stored
console.log('My age is ' + myAge);

function retirementAge(year,firstname){
    year = myAge;
    var retirement = 65 - year;
    console.log(firstname + 'is going be retired in ' + retirement + ' year')
}
retirementAge(25,'puneet')

*/
function calculateAge(birthYear){
    return 2022 - birthYear;
}
var ageMike = calculateAge(2010);
console.log(ageMike)

function retirementAge(year,firstname){
    age = calculateAge(year);
    var retirement = 65 - age;  

    console.log(firstname + ' will be retired in ' + retirement + ' year')
}
retirementAge(2010,'mike')
retirementAge(1997,'Puneet')