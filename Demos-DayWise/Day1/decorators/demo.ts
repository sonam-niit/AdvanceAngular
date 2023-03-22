//class decorators
function extra(constructorFunction: Function) {
    constructorFunction.prototype.id =Math.floor(Math.random());
}
@extra
class User {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let u: User = new User("Nissan");
console.log(u);
console.log(`Id: ${u['id']}`);