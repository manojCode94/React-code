const fs = require('fs')

const path = require('path')

const rs = fs.createReadStream(path.join(__dirname, 'lorem.txt'), {encoding: 'utf8'})

const ws = fs.createWriteStream(path.join(__dirname, 'newlorem.txt'))

//listning for the data coming from the stream

// rs.on('data', (data) => {
//     console.log(data)
//     //passing the data chunk
//     ws.write(data)
// })

rs.pipe(ws)