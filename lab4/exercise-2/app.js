const express = require('express');
let app = express();

app.listen(3000);

let requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);

app.get("/greet", (req, res) => {
    console.log(`GET received: ${req.requestTime}`);
    res.send("Hello green GET!");
});

app.post("/greet", (req, res) => {
    console.log(`POST received: ${req.requestTime}`);
    res.send("Hello green POST!");
});

app.put("/greet", (req, res) => {
    console.log(`PUT received: ${req.requestTime}`);
    res.send("Hello green PUT!");
});

app.delete("/greet", (req, res) => {
    console.log(`DELETE received: ${req.requestTime}`);
    res.send("Hello green DELETE!");
});
