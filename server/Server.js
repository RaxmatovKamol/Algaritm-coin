const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
require("dotenv").config();
require("./src/config.mongodb");
const router = require("./src/Router");
const auth = require("./src/Middleware/Auth");
const admin = require("./src/Controller/Admin");
const { login } = require("./src/Validation/admin.validation");

app.use(cors());
app.use(express.json());
app.post("/login", [login], admin.login)
app.use(auth);
app.use(router);
app.listen(port,() => console.log(`Listening on port ${port}`));