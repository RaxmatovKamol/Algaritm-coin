const rt = require("express").Router();
const db = require("./config.mongodb");






// ============Router for Admin ================

const admin = require("./Controller/Admin");
const { login } = require("./Validation/admin.validation");


// ============Router for Students ================

const student = require("./Controller/Students");
rt.post("/add/student",student.add);

module.exports = rt;

