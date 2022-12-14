const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose')



app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser())

app.use(express.static('./assets'))

app.use(expressLayouts);

app.set('layout extractStyles', true)
app.set('layout extractScripts', true)

//use express router
app.use('/', require('./routes'))

app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${err}`)
    }
    console.log(`server is successfully running on port: ${port}`)
})