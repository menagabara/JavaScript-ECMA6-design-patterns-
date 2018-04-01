class Level {
    constructor() {
    }

    LevelInterface(){
    }
}


class Easy extends Level{
    constructor() {
        super()
    }

    LevelInterface (){
        console.log('easy level.')
    }
}


class Intermediate extends Level{
    constructor() {
        super()
    }

    LevelInterface (){
        console.log('intermediate level.')
    }
}


class Hard extends Level{
    constructor() {
        super()
    }

    LevelInterface (){
        console.log('hard level.')
    }
}


class Game {
    constructor(level){
        this.Level = level
    }

    LevelInterface(){
        this.Level.LevelInterface()
    }
}


console.log("Strategy design pattern.")

game = new Game(new Easy())
game.LevelInterface()

game = new Game(new Intermediate())
game.LevelInterface()

game = new Game(new Hard())
game.LevelInterface()
