/*
 4. Output of following closure ?
for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}
*/

for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}
/* what is logged?
log() gives output message to the web console.

*/
/* 

output 
3
3
3

*/