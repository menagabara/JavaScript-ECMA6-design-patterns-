class NEmployee{
    constructor(){

    }

    doWork(){

    }

    getEmployeeType(){

    }

    getWorkingHours(){

    }

    isNull(){

    }
}


class NFullTimeEmployee extends NEmployee{
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

    isNull(){
        return false
    }
}


class NPartTimeEmployee extends NEmployee{
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

    isNull(){
        return false
    }
}


class NFreelancerEmployee extends NEmployee{
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

    isNull(){
        return false
    }
}


class NullEmployee extends NEmployee{
    constructor(){
        super()
    }

    doWork(){
        console.log("Null.")
    }

    getEmployeeType(){
        console.log("Null.")
    }

    getWorkingHours(){
        console.log("Null.")
    }

    isNull(){
        return true
    }
}


class NEmployeeFactory{
    getEmployee(employeeType) {
        switch (employeeType) {
            case "fullTime":
                this.employee = new NFullTimeEmployee()
                break
            case "partTime":
                this.employee = new NPartTimeEmployee()
                break
            case "freelancer":
                this.employee = new NFreelancerEmployee()
                break
            default:
                this.employee = new NullEmployee()
                break
        }
        return this.employee
    }
}



console.log("Null Design pattern.")

type = null

emp = new NEmployeeFactory().getEmployee(type)
emp.doWork()
emp.getEmployeeType()
emp.getWorkingHours()
