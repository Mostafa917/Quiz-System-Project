require("dotenv").config();
const app = require("./app/run");

app.listen(
    process.env.PORT,
    ()=> console.log(`http://localhost:${process.env.PORT}`)
);
