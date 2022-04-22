//function expression and function decaration
//eg of function decaration:

/*function whatDoYouDou (firstname,job){

}*/

//function expression 

var whatDoYouDou = function (firstname,job){
    switch(job){
        case 'teacher':
            return firstname + ' teches kids the coding';
        case 'driver':
            return firstname + ' drives a cab';
    }
}
console.log(whatDoYouDou('puneet','teacher'))
console.log(whatDoYouDou('david','driver'))