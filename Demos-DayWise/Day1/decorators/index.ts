// const changeValue = (value) => (target: Object, propertyKey: string) => {
//     Object.defineProperty(target, propertyKey, { value });
// };
function SelfDriving(constructorFunction: Function) {
    console.log('-- decorator function invoked --');
    //declared one variable
    constructorFunction.prototype.selfDrivable = true;
}
@SelfDriving
//Child
class Car {
    private _make: string;
    constructor(make: string) {
        console.log('-- Child constructor invoked --');
        this._make = make;
    }
}
console.log('-- creating an instance --');
let car: Car = new Car("Nissan");
console.log(car);
console.log(`selfDriving: ${car['selfDrivable']}`);

console.log('-- creating one more instance --');
car = new Car("Toyota");
console.log(car);
console.log(`selfDriving: ${car['selfDrivable']}`);