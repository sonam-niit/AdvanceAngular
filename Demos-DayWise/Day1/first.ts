var x : number=10;
console.log("Value of x: "+x);
var msg:string="Hello World";
var msg1:string= "Message: "+msg;
var msg2:string='Message: '+msg;
var msg3:string=`Message is ${msg}`;

console.log(msg,msg1,msg2,msg3);

let myTuple: [number,number,string];
myTuple=[10,20,"Hello World"];
console.log(myTuple);
myTuple.push("Hello")
console.log(myTuple);