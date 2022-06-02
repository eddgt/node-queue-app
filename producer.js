const amqp = require('amqp');

const rabbitSettings = {
    protocol: 'amqp',
    hosname: 'localhost',
    port: 5672,
    username: 'TestEdd',
    password: 'TestEdd',
    vhost: '/',
    authMechanism: ['PLAIN','AMQPLAIN','EXTERNAL']
}

connect();

async function connect(){
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log("Connection created!...");

    } catch (error) {
        console.error(`Error -> ${error}`);
    }
}