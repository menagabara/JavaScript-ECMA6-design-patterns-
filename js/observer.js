class Publisher{
    constructor(){

    }

    notifyAll(){

    }

    attach( subscriber){

    }
}


class Subscriber{
    constructor(){

    }

    update(){

    }

}


class Server extends Publisher{

    constructor(){
        super()
        this.subscribersArr = []

    }

    sendResuest(){
        //sleep.
        this.notifyAll()

    }

    notifyAll(){
        for (let i=0; i< this.subscribersArr.length;i++) {
            this.subscribersArr[i].update()
        }

    }

    attach( subscriber ){
        this.subscribersArr.push(subscriber)
    }
}


class UI extends Subscriber{
    constructor(){
        super()
    }

    update(){
        console.log("Update UI.")
    }
}


class Logic extends Subscriber{
    constructor(){
        super()
    }

    update(){
        console.log("Update logic.")
    }
}


console.log("Observer design pattern.")

server = new Server()
ui = new UI()
logic = new Logic()

server.attach(ui)
server.attach(logic)

server.sendResuest()
