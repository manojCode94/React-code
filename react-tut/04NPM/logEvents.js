//third party module
const {format} = require('date-fns')
const {v4:uuid} = require('uuid')


//importing common core module
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')


//logging event

const logEvents  = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:MM:SS')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    console.log('Testing !')

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fs.promises.appendFile(path.join(__dirname, 'logs','eventlog.txt'), logItem)
    } catch (err) {
        console.log(err)
    }
}

module.exports = logEvents