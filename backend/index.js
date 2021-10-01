const app = require("express")();
const fs = require("fs");
const cors = require("cors");

app.use(cors());

const readJSONFile = (fileName, callback) => {
    fs.readFile(fileName, (err, rawData) => {
        callback(JSON.parse(rawData));
    });
}

app.use("/questions", (req, res) =>{
    readJSONFile("db-questions.json", (data) => {
        res.send(data.questions);
    });
});

/*sends back a specific question*/
app.use("/question/:id", (data) => {
    readJSONFile("db-questions.json", (data) => {
        res.send(data.questions[req.params.id - 1]);
    });
});

app.listen(5000, () => {
    console.log("Listening on port 5000..");
});