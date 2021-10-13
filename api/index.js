const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

require("./src/database");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(5000, () =>{
    console.log("BACKEND is running!");
});