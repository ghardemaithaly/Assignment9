//2. What is the difference between a closure and a scope ?

//normal function scope
function out(){
    let num1= 20;
    console.log(num1);
    return function iN(){
        let num2= 10;
        console.log("inner",num2, num1);
    };
}
out();

//closure 
function outer(){
    console.log("outer");
    return function(){

        let user="Maithaly"
        console.log("i am outer",user);
    }
}
let result =outer();
result();


 