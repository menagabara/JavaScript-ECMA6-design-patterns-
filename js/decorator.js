class DBEngine{
    constructor(){

    }

    connect(){

    }

    performQuery(){

    }

    PerformWriteOperation(){

    }

    disconnect(){

    }
}


class SQL extends DBEngine{
    constructor(){
        super()
    }

    connect(){
        console.log("Connect.")
    }

    performQuery(){
        console.log("Perform query.")
    }

    PerformWriteOperation(){
        console.log("Perform write operation.")
    }

    disconnect(){
        console.log("Disconnect.")
    }
}


class DBDecorator extends DBEngine{
    constructor(db){
        super()
        this.db = db
    }

    connect(){
        this.db.connect()
    }

    performQuery(){
        this.db.performQuery()
    }

    PerformWriteOperation(){
        this.db.PerformWriteOperation()
    }

    disconnect(){
        this.db.disconnect()
    }

}


class SQLDecorator extends DBDecorator{
    constructor(db){
        super(db)
    }

    logTransaction(){
        console.log("log transaction.")
    }

    connect(){
        console.log("Decorator connect.")
    }

}


console.log("Decorator design pattern.")

sqlDecorator = new SQLDecorator( new SQL() )
sqlDecorator.connect()
sqlDecorator.performQuery()
sqlDecorator.PerformWriteOperation()
sqlDecorator.logTransaction()
sqlDecorator.disconnect()
