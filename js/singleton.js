class DB {
    constructor() {
        if (!DB.instance) {
            this.connect()
            DB.instance = this
        }
        Object.freeze(DB)
        return DB.instance
    }

    connect(){
        console.log("instance")
    }

    performQuery(){
        console.log("query")
    }
}


console.log("Singleton design pattern.")

const instance = new DB()
instance.performQuery()

const instance2 = new DB()
instance2.performQuery()
