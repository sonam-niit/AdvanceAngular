class Person{
    constructor(public firstName:string,public lastName:string,public age:number){}

    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
}
//inheritance
class Student extends Person{

    constructor(firstName:string,lastName:string,age:number,
        public studentId:number){
        super(firstName,lastName,age);
    }
    getStudentInfo():string{
        return `${this.getFullName()}, Age: ${this.age},
         StudentId: ${this.studentId} `
    }
}
//inheritance
class Teacher extends Person{
    private salary:number
    constructor(firstName:string,lastName:string,age:number,salary:number){
        super(firstName,lastName,age);
        this.salary=salary;
    } 
    getSalary():number{
        return this.salary;
    }
}
let s1= new Student("Sonam","Soni",34,890);
console.log(s1.getStudentInfo())
let t1= new Teacher("Alex","John",56,67899);
console.log(t1.getFullName())
console.log(t1.getSalary());
