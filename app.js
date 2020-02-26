const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/timestamp/:date_string", (req, res) => {
    let value = req.params.date_string;
    console.log(typeof value);
    if (isNaN(value)) {
        let date = new Date(value);
        if (date != "Invalid Date") {
            res.json({
                unix: date.getTime(),
                utc: date.toUTCString()
            });
        } else {
            res.json({
                error: "Invalid Date"
            })
        }
    } else {
        console.log(value + " Value");
        let date = new Date(parseInt(value));
        if (date != "Invalid Date") {
            res.json({
                unix: value,
                utc: date.toUTCString()
            })
        } else {
            res.json({
                error: "Invalid Date"
            })
        }
    }
})


app.listen(3000, () => {
    console.log("Kool");
})