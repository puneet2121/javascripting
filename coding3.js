
function simpleTipCalculator(bill){
    let percentage;
    if (bill < 50){
        percentage = 0.2;
        
    }
    else if (50 < bill < 200){
        percentage = 0.15;
    }
    else{
        percentage = 0.10;
    }
    return percentage * bill
}
var bills = [124,48,268]
var tips = [simpleTipCalculator(bills[0]),simpleTipCalculator(bills[1]),simpleTipCalculator(bills[2])]
var totalAmount = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];
console.log(bills);
console.log(tips)
console.log(totalAmount)