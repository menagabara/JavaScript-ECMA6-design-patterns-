class Dispatcher{
    constructor(){
        this.userController = new userControllers()
    }

    dispatch(request){
        switch(request){
            case "user/add":
                this.userController.addUserAction()
                break
            case "user/list":
                this.userController.listUsersAction()
                break
        }
    }
}