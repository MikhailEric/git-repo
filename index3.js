const express = require("express");
const app = express();
const PORT = 5000;

app.get("/caps", (req, res) => {
    res.status(200).send({
        tshirts:"tshirts",
        caps:"Caps"
    })
})