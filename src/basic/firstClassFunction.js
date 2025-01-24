/*
    Fist Class Function:
        A programming language is said to have First-class functions when functions in that language are treated like any other variable.
        For example, in such a language, a function can be passed as an argument to other functions, 
        can be returned by another function and can be assigned as a value to a variable.
*/

/*
    ~Assigning varible into function~
    */
const greeting = () => {
  console.log("Hello World");
};

//function call :- here variable is treated as function
greeting();

/*
    ~Passing a function as an argument~
    */
function celebrate(name) {
  console.log("Happy Birthday " + name);
}

//we can give any name to the argument function here
function person(cel, name) {
  cel(name);
}

//But we have to maintain the correct function's name here
person(celebrate, "Suraj");

/*
    ~Returning a Function~
    */
function askForParty() {
  return () => {
    console.log("Gift first..!!");
  };
}

//askForParty returning a anonymous function
const friend = askForParty();
//here the variable is treated as function
friend();

/*
It's all about first class function
for more: https://en.wikipedia.org/wiki/First-class_function
*/
