const $ = (x) => console.log(x)

let x = Math.floor(Math.random() * 3)

$(x)

const express = require('express');

const app = express();

const hostname = '127.0.0.1';

const port = 5500;

app.get("",(req,res) => {
    res.send("Hello World")
} )

if (x == 0){
    $("random value is " + x)
}

else if ( x == 1 ) {
    $("random value is " + x)
}

else{
    $("random value is " + x)
}

app.get("/index.html",(req,res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(port,hostname,() => {

    $(`server running at http://${hostname}:${port}`)

})

