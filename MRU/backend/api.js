// express for handling http requests
const express = require('express');
const path = require('path');

const app = express();

// {base url}/ [GET]
// -> [200]
app.get("/", (req, res) => {
    return res.status(200).json({msg: "hello"});
});

// {base url}/login [GET]
// -> [200]
// -> [401]
app.get("/login", (req, res) => {
    return res.status(200).json({msg: "hello"});
});

// {base url}/signup [POST]
// -> [200]
// -> [400]
app.post("/signup", (req, res) => {
    return res.status(200).json({msg: "hello"});
});

// {base url}/messages/{userId} [GET]
// -> [200]
// -> [401]
app.get("/messages/{userId}", (req, res) => {
    return res.status(200).json({msg: "hello"});
});

module.exports = app;