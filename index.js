const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = 8000;
const db = mongoose.connection;


const router = require("./routes/index");
app.use(express.json());


app.get("/", (req, res) => res.send("Hello there! ....This is the homepage...."));
app.use(router);

app.listen(PORT, () => {

    try {
        mongoose.connect("mongodb://localhost:27017/e-commerce-api");

        db.on("error", () => console.log(`Database connection error`));

        db.once("open", function() {
            console.log("e-Commerce Database connected!!");
        });

    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }

    console.log(`Express server listening on ${PORT} port!`);
});