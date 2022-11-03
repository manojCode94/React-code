const fs = require("fs");

//if the directory is already there do not created
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) {
      throw err;
    }
    console.log("Directory created...");
  });
}


if(fs.existsSync('./new')){
    fs.rmdir('./new', (err)=> {
        if(err) {
            throw err
        }
        console.log('Directory removed!')
    })
}