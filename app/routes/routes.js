const controller = require('../controller/controller')

module.exports = (routes) => {
    routes.get('/hello_world  how are you i am fine ', controller.messageController);
}
