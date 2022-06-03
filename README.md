# RabbitMQ
Ref tutorial
https://www.youtube.com/watch?v=towReVkKZ5Q&t=932s


## manejo de cola de mensajes
- producer
- broker
- consummer

## imagen de docker
Docker image for RabbitMQ with manger portal rabbitmq:3-management


## Ejecutar desde comandos linux
1. sudo docker pull rabbitmq:3-management
2. sudo docker run -d -p 15672:15672 -p 5672:5672 --name rabbitmq rabbitmq:3-management

## la consola de rabbitMQ se accesa en:
http://localhost:15672

## Ejecutar app 
## producer.js produce los mensajes que se envian a la cola
node producer.js


## Ejecutar consumer desde otra terminal
## el consumer0.js escucha la cola y consume los mensajes que llegan a esta segun los mensajes que tiene definido leer
node consumer0.js

