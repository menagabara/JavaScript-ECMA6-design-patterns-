class StoreMoves{
    storeMoves(){
        console.log("Store moves.")
    }
}

class AdvancedStoreMoves{
    AskUserBeforeSaving(){
        console.log("Ask user before saving.")
    }

    storeMoves(){
        console.log("Store moves.")
    }

    endGame(){
        console.log("End game")
    }
}

class StoreMovesAdaptor extends StoreMoves{
    constructor(){
        super()
        this.advancedMoves = new AdvancedStoreMoves()
    }

    storeMoves(){
        this.advancedMoves.AskUserBeforeSaving()
        this.advancedMoves.storeMoves()
        this.advancedMoves.endGame()
    }
}


console.log("Adaptor design pattern.")

adaptor = new StoreMovesAdaptor()
adaptor.storeMoves()