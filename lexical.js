//3. What is a lexical scope and how is it related to closure?
/*

lexical scope means things it can access,
closure will return not only functions but also variables which are in the lexcial scope.

*/


function out(){
    let num1= 20;
    console.log(num1);
    return function iN(){
        let num2= 10;
        console.log("inner",num2, num1);
    };
}
let display= out();
display();