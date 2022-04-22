var john = ['john','smith',1990,false,'designer'];
console.log(john);
john[0] = 'will';

console.log(john.length)
john[john.length] ='black'


john.push('blue');

john.unshift("Mr");
john.shift();
console.log(john.indexOf(1990));
console.log(john);
console.log(john.indexOf(23));

var will = john.indexOf('designer') === -1 ? 'The designer is not in the list': 'The designer is in the list';
console.log(will)