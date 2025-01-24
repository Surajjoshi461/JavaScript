/* 
    Variables are containers that store values. 
    You start by declaring a variable with the "var", "let", "const" keyword, 
    followed by the name you give to the variable 
*/

/* 
    Var : this is the first variable in javaScript and have Global Scope.
    */

//we can assign any type of data inside it -- here is assign string to it
var firstName;
firstName = "suraj";
{
  //VAR is global variable. it means i can use lastName outside the block or through out the file
  var lastName = "joshi";
}

//here i concatenate string using the + operator and adding space in between my name
console.log(firstName + " " + lastName);

//even i can change the value of variable whenever i want to
lastName = "Joshi"; //as you noticed i changed first char. by capitalizing it
console.log(firstName + " " + lastName);

/* 
    Let : This introduce after ES6, this is the block scope variable and much similar to VAR
    */

let age;
age = 22;

{
  let birthDate = 3;
  //i can use age because it above the block(which mean for now it is global)
  console.log("age: " + age, "Birth Date: " + birthDate);
}
//the below code give error(birthDate is not defined ERROR), because birthDate have life inside the above block (it has block scope)

// console.log("age: " + age, "Birth Date: " + birthDate);

/* 
    ~we can redeclare let and var variable
    
*/

firstName = "Suraj";
age = "23";
console.log(firstName + " " + age);
