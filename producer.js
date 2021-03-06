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

    const msgs = [
        {name: 'Hola Eddgt Queue con node.js Yt!',enterprise: 'Youtube'},
        {name: 'Hola Eddgt Queue con node.js Fb!',enterprise: 'Facebook'},
        {name: 'Hola Eddgt Queue con node.js Tw!',enterprise: 'Twitter'},
        {name: 'Hola Eddgt Queue con node.js Ggl!',enterprise: 'Google'},
        {name: 'Hola Eddgt Queue con node.js Aws!',enterprise: 'AWS'}
    ];
    try {
        const conn = await amqp.connect(rabbitSettings);
        console.log("Connection created!...");

        const channel = await conn.createChannel();
        console.log("Channel created!...");

        const resolved = await channel.assertQueue(queue);
        console.log("Queue created!...");

        for(let msg in msgs){
            await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg]), ));
            console.log("Message sent to queue " + queue);
        }

    } catch (error) {
        console.error(`Error -> ${error}`);
    }
}