/*
1. Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program

function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

*/

//Is the InnerFunction() a closure?
/*
A closure gives us access to an outer function's scope  from an inner function.
hence here the InnerFunction() is a closure.


*/

function OuterFunction()
{ 
var outerVariable = 100;
function InnerFunction()
 {
console.log(outerVariable);//100
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

//b) What is output of this program
//output is 100