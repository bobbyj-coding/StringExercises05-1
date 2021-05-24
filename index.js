let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.

let java = language.slice(0,1);
let script = language.slice(4,5);
console.log(java + script);

//b) Without using .slice(), use method chaining to accomplish the same thing.

console.log(language.replace("JavaScript", "js").toUpperCase());

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for ${language} is ${java[0] + script[0]}.`);

//d) Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(java.concat("",language,script).toUpperCase().replace("S", "$"));
