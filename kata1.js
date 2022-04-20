const sumLargestNumber = function(data) {
let largest = data[0];
let secondlargest = data[1];
if (largest > secondlargest) {
    largest = data[0];
    secondlargest = data[1];
    
}
else{
    largest = data[1];
    secondlargest = data[0];
}
for (let i = 0; i < data.length; i++ ){
    if(data[i] > largest) {
        secondlargest = largest;
        largest = data[i];
      }
}
return largest + secondlargest;
}
console.log(sumLargestNumber([1,4,15,6,30,50]))
