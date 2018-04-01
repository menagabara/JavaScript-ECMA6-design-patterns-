class userControllers{
    constructor(){
        this.model =new userModels()
        this.view = new userViews()
    }

    addUserAction(){
        this.view.addUserUI()
        this.model.insertUser()
    }

    listUsersAction(){
        this.model.getUserData()
        this.view.listUsers()
    }
}


