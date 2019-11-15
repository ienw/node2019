'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/',(req,res) => {
        res.send("Hi from my express server")
    }
);

app.get('/demo',(req, res) => {
        console.log("request", req);
	res.send('demo')
    }
);

app.listen(3000, () => {
	console.log('listening from port 3000');
});