//basic interface
interface Person{
    name:string;
    age:number;
}
//create interface with optional variable
interface User{
    id:number;
    email?:string;
}
//interface with readonly property
interface Point{
   readonly x:number;
   readonly y:number;
}
//create intefaces using functions
interface Calculator{
    add(a:number,b:number):number;
    sub(a:number,b:number):number;
    mul(a:number,b:number):number;
    div(a:number,b:number):number;
}
//interface can extends interfaces
interface Employee extends Person{
    department:string;
    salary:number;
}
//interface extending multiple interface
interface Shape{
    draw():void;
}
interface Rectangle extends Shape{
    width:number;
    height:number;
}