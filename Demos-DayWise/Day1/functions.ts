function add(a:number,b:number):number{
    return a+b;
}
function greet(name?:string){
    console.log(`Welcome ${name ?? 'User'}`)
}
console.log(add(12,34));
greet();
greet('Sonam');