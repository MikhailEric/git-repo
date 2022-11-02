const app = require("express");

const PORT = 8080;

// app.listen(
//     PORT, 
//     () => {
//         return console.log(`It's alive on https://localhost:${PORT}`);
//     }
// )

app.get("/tShirts", (req, res) => {
    res.status(200).send({"slackname":"MikahilEric","email":"ifemejeericjustin@gmail.com"});
})
