'use strict';

const express = require('express');

const app = express();

app.get('/',(req,res) => {
        res.send("Hi from my express server")
    }
);

app.listen(3000);