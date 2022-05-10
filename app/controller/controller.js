module.exports = {
    messageController(req, res) {

        let response = {
            success: true,
            message: "Hello World!!! how areyou "
        }

        res.status(200).send(response)
    }
}
