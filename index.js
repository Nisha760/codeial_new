const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./route'));

app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err){
    if(err){
        console.log(`error in running the server ${err}`);
    }

    console.log(`server is running at port : ${port}`);
})   