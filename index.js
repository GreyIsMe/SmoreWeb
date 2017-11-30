const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet())

//listening on ports below 1024 requires root
const port = 80

function running() {
    console.log(`listening on port: ${port}`);
};

app.use(express.static("public_html"));

app.get('/discord', function(req, res){
   res.redirect(301, `https://discord.gg/6P6MNAU`);
   console.log(`Discord Redirect sent to ${req.ip}`);
});

app.get('/contact', function(req, res){
    res.redirect(301, `mailto:smorebtofficail@gmail.com`);
    console.log(`Email Redirect sent to ${req.ip}`);
});

app.get('/bots/:bot', function(req, res){
    if(req.params.bot === 'smore') {
        res.redirect(301, `https://discordapp.com/oauth2/authorize?permissions=360054015&scope=bot&client_id=290228059599142913`);
        console.log(`Smore Redirect sent to ${req.ip}`);
    } else {
        res.send('Please provide a valid bot');
    };
});

//block pages that are under construction

app.get('/about.html', function(req, res){
	res.sendFile(__dirname + '/public_html/maintenance.html');
	console.log(`Error Page sent to ${req.ip}`);
});

app.get('/projects.html', function(req, res){
	res.sendFile(__dirname + '/public_html/maintenance.html');
	console.log(`Error Page sent to ${req.ip}`);
});

app.get('/team.html', function(req, res){
	res.sendFile(__dirname + '/public_html/maintenance.html');
	console.log(`Error Page sent to ${req.ip}`);
});

app.get('/smorebot.html', function(req, res){
	res.sendFile(__dirname + '/public_html/maintenance.html');
	console.log(`Error Page sent to ${req.ip}`);
});

app.get('/dsmores.html', function(req, res){
	res.sendFile(__dirname + '/public_html/maintenance.html');
	console.log(`Error Page sent to ${req.ip}`);
});

app.get('/vert.html', function(req, res){
	res.sendFile(__dirname + '/public_html/maintenance.html');
	console.log(`Error Page sent to ${req.ip}`);
});

app.get('/*', function(req, res){
   res.sendFile(__dirname + '/public_html/404.html');
   console.log(`Error Page sent to ${req.ip}`);
});
 
app.listen(port, running);
