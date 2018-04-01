class MyDBEngine{

    constructor(){

    }

    loadDrive(){

    }

    connect(){

    }

    performQuery(){

    }

    PerformWriteOperation(){

    }

    disconnect(){

    }

    logTransaction(){

    }

}

class MSSQL extends MyDBEngine{
    constructor(){
        super()
    }

    connect(){
        console.log("SQL Connect.")
    }

    performQuery(){
        console.log("SQL Perform query.")
    }

    PerformWriteOperation(){
        console.log("SQL Perform write operation.")
    }

    disconnect(){
        console.log("SQL Disconnect.")
    }
    logTransaction(){
        console.log("SQl Log transaction.")
    }
}


class Mongo extends MyDBEngine{
    constructor(){
        super()
    }

    connect(){
        console.log("Mongo Connect.")
    }

    performQuery(){
        console.log("Mongo Perform query.")
    }

    PerformWriteOperation(){
        console.log("Mongo Perform write operation.")
    }

    disconnect(){
        console.log("Mongo Disconnect.")
    }
    logTransaction(){
        console.log("Mongo Log transaction.")
    }
}


class DataBase{
    constructor(db){
        this.engine = db
    }

    connect(){
        this.engine.loadDrive()
        this.engine.connect()
    }

    performQuery(){
        this.engine.performQuery()
    }

    PerformWriteOperation(){
        this.engine.PerformWriteOperation()
    }

    disconnect(){
        this.engine.disconnect()
    }
    logTransaction(){
        this.engine.logTransaction()
    }
}


console.log("Bridge design pattern.")

db = new DataBase(new Mongo())
db.connect()
db.performQuery()
db.PerformWriteOperation()
db.logTransaction()
db.disconnect()