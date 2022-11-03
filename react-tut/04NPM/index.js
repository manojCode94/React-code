//The NPM node pakage manager
//This are the node modules created by the other developer
//this are reusable modules

//we can install the node package globally 
//npm i nodemon -g
// -- gloabally - withough adding to the specific project
// -- call withe command line
// nodemon -- it always trace the file for any changes
// nodemon go and look for the index js as starter file
//Now the installation of the node package inside the project

// const {format} = require('date-fns')
// const {v4: uuid} = require('uuid')

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
// //Unique generated id
// console.log(uuid())

//importing custom modules
const logEvents = require('./logEvents')

//this is the core events module
const EventEmitter = require('events')

class MyEmitter extends EventEmitter 
{

};

//initialize Object
const myEmitter = new MyEmitter()

//add listener for the log event
myEmitter.on('log', (msg) => {
    return logEvents(msg)
})

setTimeout(() => {
    //Emit the event
    myEmitter.emit('log', 'log event emmmited')
}, 2000)

