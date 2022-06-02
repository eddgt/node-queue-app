const amqp = require('amqplib');

const rabbitSettings = {
    protocol: 'amqp',
    hosname: '172.17.0.1',
    port: 5672,
    username: 'TestEdd',
    password: 'TestEdd',
    vhost: '/',
    authMechanism: ['PLAIN','AMQPLAIN','EXTERNAL']
}

connect();

async function connect(){
    const queue = "employees";
    const enterprise = "Youtube";
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log("Connection created!...");

        const channel = await conn.createChannel();
        console.log("Channel created!...");

        const resolved = await channel.assertQueue(queue);
        console.log("Queue created!...");

        // recibir mensajes
        console.log("Waiting for messages from " + enterprise);
        channel.console(queue, message =>{
            let employee = JSON.parse(message.content.toString());
            console.log("Received employee.name: " + employee.name);
            console.log("Received employee: " + employee);
        })

    } catch (error) {
        console.error(`Error -> ${error}`);
    }
}