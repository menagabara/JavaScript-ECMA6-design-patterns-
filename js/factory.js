class Employee{
    constructor(){

    }

    doWork(){

    }

    getEmployeeType(){

    }

    getWorkingHours(){

    }
}


class FullTimeEmployee extends Employee{
    constructor(){
        super()
    }

    doWork(){
        console.log("Full time -> do work.")
    }

    getEmployeeType(){
        console.log("Full time -> type.")
    }

    getWorkingHours(){
        console.log("Full time -> 40.")
    }
}


class PartTimeEmployee extends Employee{
    constructor(){
        super()
    }

    doWork(){
        console.log("Part time -> do work.")
    }

    getEmployeeType(){
        console.log("Part time -> type.")
    }

    getWorkingHours(){
        console.log("Part time -> 30.")
    }
}


class FreelancerEmployee extends Employee{
    constructor(){
        super()
    }

    doWork(){
        console.log("Freelancer -> do work.")
    }

    getEmployeeType(){
        console.log("Freelancer -> type.")
    }

    getWorkingHours(){
        console.log("Freelancer -> 20.")
    }
}


class EmployeeFactory{
    getEmployee(employeeType) {
        switch (employeeType) {
            case "fullTime":
                this.employee = new FullTimeEmployee()
                break
            case "partTime":
                this.employee = new PartTimeEmployee()
                break
            case "freelancer":
                this.employee = new FreelancerEmployee()
                break
            default:
                console.log("unknown type.")
                break
        }
        return this.employee
    }

}

console.log("Factory Design pattern.")

type = "freelancer"

emp = new EmployeeFactory().getEmployee(type)
emp.doWork()
emp.getEmployeeType()
emp.getWorkingHours()
