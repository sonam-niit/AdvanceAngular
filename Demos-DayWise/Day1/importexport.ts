import { Employee } from "./employee";

let e1:Employee = new Employee("sonam","IT",345678);
e1.display();
console.log("Salary of Emp1: "+e1.salary);
console.log("Before Set: "+e1.name);
e1.name="Sonam Soni";
console.log("After Set: "+e1.name);