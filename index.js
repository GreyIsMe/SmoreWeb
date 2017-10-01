const express = require('express');
const app = express();

function running() {
    console.log(`listening on port: 80`)
};

app.use(express.static("public_html"));

app.get('/discord', function(req, res){
   res.redirect(301, `https://discord.gg/6P6MNAU`)
   console.log(`Discord Redirect sent to ${req.ip}`)
   next()
});

app.get('/*', function(req, res){
   res.sendFile(__dirname + '/public_html/error.html');
   console.log(`Error Page sent to ${req.ip}`)
});
 
app.listen(80, running);
