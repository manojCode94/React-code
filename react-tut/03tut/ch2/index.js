//const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

//so, the throe error will go on throw the uncaught exception
//so, we need to catch that
//readfile is async read the file
//readding the path
//console.log(path.join(__dirname, './starter.txt'))

//Now using the promises
const fileops = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'newstarter.txt'), 'utf8')
        console.log(data)
        console.log('delete the file ...')
        await fsPromises.unlink(path.join(__dirname, './newstarter.txt'))
        console.log('WriteFile & creating if file not exists ...')
        await fsPromises.writeFile(path.join(__dirname, './newstarter.txt'), data)
        console.log('Appending data ...')
        await fsPromises.appendFile(path.join(__dirname, './newstarter.txt'), '\n\nNice to meet you')
        console.log('Rename file ...')
        await fsPromises.rename(path.join(__dirname, './newstarter.txt'),path.join(__dirname,'./renameprocomplete.txt'))
        console.log('ReadFile ....')      
        const newdata = fsPromises.readFile(path.join(__dirname, './renameprocomplete.txt', 'utf8'))
        console.log(newdata)
    }catch(err) {
        console.log(err)
    }
}

fileops()

console.log('Hello, My name is manoj')

// fs.readFile(path.join(__dirname, 'starter.txt'),'utf-8' ,(err, data)=> {
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// console.log('Hello...')

// process.on('uncaughtException', (err)=> {
//     console.log(`There was an uncaught exception: ${err}`)
//     process.exit(1)
// })



// //Writing the file

// //This will remove the prevois content and add new line
// fs.writeFile(path.join(__dirname, 'starter.txt'),'Nice to meet you!', (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('Writing complete...')
// })

// //This will update the file
// //Means update the file
// //this will create the file if the file not exists
// //we can also call this append file inside the call back in the writeFile
// fs.appendFile(path.join(__dirname, 'starter.txt'),'\nTesting it again !', (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('File update complete...')
// })


// //renaming the file
// fs.rename(path.join(__dirname, 'starter.txt'), path.join(__dirname, 'newstarter.txt'), (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('Rename complete...')
// })