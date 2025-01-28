/* 
    Variables are containers that store values. 
    You start by declaring a variable with the "var", "let", "const" keyword, 
    followed by the name you give to the variable.
    
    we can assign in type of data in three of them.
*/

/* 
    Var : this is the first variable in javaScript.
          var has global scope
          its not necessary to assign value at declaration time
          var can be redeclare
    */

//we can assign any type of data inside it -- here is assign string to it
var firstName;
firstName = "suraj";
{
  //VAR is global variable. it means i can use lastName outside the block
  var lastName = "joshi";
}

//here i concatenate string using the + operator and adding space in between my name
console.log(firstName + " " + lastName);

//even i can change the value of variable whenever i want to
lastName = "Joshi"; //as you noticed i changed first char. by capitalizing it
console.log(firstName + " " + lastName);

/* 
    Let : This is introduce after ES6
          let is scope variable - means we can access it inside the block it declare
          let can not be redeclare
          its not necessary to assign value at declaration time
    */

let age;
age = 22;

{
  let birthDate = 3;
  //i can use age because it above the block(which mean for now it is global)
  console.log("age: " + age, "Birth Date: " + birthDate);
}
//the below commented code give error(birthDate is not defined ERROR), because birthDate have life inside the above block (it has block scope)
// console.log("age: " + age, "Birth Date: " + birthDate);

/* 
    ~we can redeclare let and var variable
    
*/

firstName = "Suraj";
age = "23";
console.log(firstName + " " + age);


/* 
    const: This is also introduce after ES6
          const is scope variable - means we can access it inside the block it declare
          const can not be redeclare
          variables defined with const cannot be Reassigned
          it is necessary to assign value at declaration time.
 */

//the below commented code gives error : 'const' declarations must be initialized,-it means we've to assign the value at declaration time.
// const greeting; 
// greeting = 'Hello';

//the correct way of declaring const is:
const greeting = 'Hello';
console.log(greeting);

//the below commented code gives error : TypeError: Assignment to constant variable.
// greeting = 'Good morning'
// console.log(greeting);

{
  //this is the example of block scope
  const time = '11:18';
  console.log(time);
}

//but we can't use time out side of block as it give error : time is not defined
// console.log(time);


/*
    So, this is all about the variable's
  */