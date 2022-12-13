// const express =  require('express')
// const app = express();
// const port = 8000;

// app.listen(port, function(err){
//     if(err){
//         console.log(`Error in running the server: ${err}`)
//     }
//     console.log(`server is running successfully on port: ${port}`)
// })

const express = require('express')
const app = express();
const port = 8000;


app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${err}`)
    }
    console.log(`server is successfully running on port: ${port}`)
})