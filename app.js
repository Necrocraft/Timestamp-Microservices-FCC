const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/timestamp", (req, res) => {
    let date = new Date();
    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })
})

app.get("/api/timestamp/:date_string", (req, res) => {
    let unix, utc;
    let value = req.params.date_string;
    if(isNaN(value)) {
        let date = new Date(value.trim());
        if(date != "Invalid Date") {
        unix = date.getTime();
        utc = date.toUTCString();
        res.json({
            unix: unix,
            utc: utc
        })
        }
        else {
            res.json({error: "Invalid Date"});
        }
    }
    else {
        if(parseInt(value) != NaN) {
            let date = new Date(parseInt(value));
            if(date != "Invalid Date") {
            unix = date.getTime();
            utc = date.toUTCString();
            res.json({
                unix: unix,
                utc: utc
            })
            }
            else {
                res.json({error: "Invalid Date"});
            }
        }
        else {
            unix = 0;
            utc = new Date(0).toUTCString();
            res.json({
                unix: unix,
                utc: utc
            })
        }
    }
})


app.listen(3000, () => {
    console.log("Kool");
})