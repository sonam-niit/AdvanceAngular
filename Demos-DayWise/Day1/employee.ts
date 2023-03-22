export class Employee{

    private _name:string;
    private _department:string;
    private _salary:number;
    set name(name:string){
        this._name=name;
    }
    get name():string{
        return this._name;
    }
    get department():string{
        return this._department;
    }
    get salary():number{
        return this._salary;
    }
    constructor(name:string,department:string,salary:number){
        this._name=name;
        this._department=department;
        this._salary=salary;
    }
    display():void{
        console.log("Name: "+this.name);//caling getter method
        console.log("Department: "+this.department);
        console.log("Salary: "+this.salary);
    }
}
