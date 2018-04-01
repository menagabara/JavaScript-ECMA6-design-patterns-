class FrontController {
    constructor() {
        this.dispatcher = new Dispatcher()
    }

    run(request) {
        this.dispatcher.dispatch(request)
    }
}

