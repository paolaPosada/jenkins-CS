const sayHello = () => ({testing: 'Testing webhook'});

const sayHelloController = (req,res) => {
    const hello = sayHello()

    return res.status(200).send(hello.testing)
}

module.exports = {sayHelloController, sayHello}