const express = require('express');
const app = express();

function running() {
    console.log(`listening on port: 80`)
};

app.use(express.static("public_html"));

app.get('/:page', function(req, res){
    res.sendFile(__dirname + `/public_html/${req.params.page}`);
 });

app.get('/discord', function(req, res){
   res.redirect(301, `https://discord.gg/6P6MNAU`)
   console.log(`Discord Redirect sent to ${req.ip}`)
});

app.get('/bots/:bot', function(req, res){
    if(req.params.bot === 'smore') {
        res.redirect(301, `https://discordapp.com/oauth2/authorize?permissions=360054015&scope=bot&client_id=290228059599142913`)
        console.log(`Smore Redirect sent to ${req.ip}`)
    } else {
        res.send('Please provide a valid bot')
    }
 });

app.get('/', function(req, res){
   res.sendFile(__dirname + '/public_html/404.html');
   console.log(`Error Page sent to ${req.ip}`)
});
 
app.listen(80, running);
