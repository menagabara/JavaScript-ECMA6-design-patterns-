class AccountingOperation{
    doLogic(){

    }
}

class Salries extends AccountingOperation{
    doLogic(){
        console.log("Salaries operations.")
    }
}


class Deduction extends AccountingOperation{
    doLogic(){
        console.log("Deduction operations.")
    }
}


class Retirement extends AccountingOperation{
    doLogic(){
        console.log("Retirement operations.")
    }
}


class NewComers extends AccountingOperation{
    doLogic(){
        console.log("New comers operations.")
    }
}


class Accounting{
    constructor(){
        this.salaries = new Salries()
        this.deduction = new Deduction()
        this.retirement = new Retirement()
        this.newComers = new NewComers()
    }

    calculateSalaries(){
        this.salaries.doLogic()
    }

    calculateDeduction(){
        this.deduction.doLogic()
    }

    setRetired(){
        this.retirement.doLogic()
    }

    setNewComers(){
        this.newComers.doLogic()
    }
}


console.log("Facade design pattern.")


account = new Accounting()
account.calculateSalaries()
account.calculateDeduction()
account.setRetired()
account.setNewComers()