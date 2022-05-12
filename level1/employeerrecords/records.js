function Employee(name, job_title, salary, status = "Full Time"){
    this.name = name
    this.job_title = job_title
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(this.name + this.job_title + this.salary + this.status)
    }
}


let employees= []

var john = new Employee("john", "blacksmith", "$50,000")
var jacob = new Employee("jacob", "carpenter", "$30,000")
var jingle = new Employee("jingle", "welder", "$80,000")

john.printEmployeeForm();
jacob.printEmployeeForm();
jingle.printEmployeeForm();
employees.push(john, jacob, jingle)
console.log(john, jacob, jingle)

