const express = require("express");
const app = express();
require("../database/dbConnection");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRoutes = require("../routes/user.routes");
const adminRoutes = require("../routes/admin.routes");
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.all("*",(req,res)=>
res.status(404).send({
apiStatus:false,
data:null,
message:"Url Not Found"
}));

module.exports = app;