const jwt = require("../Services/jwt.service")

const auth = async (req,res,next) => {
    const token = req?.headers?.authorization?.split(" ").pop();
    const admin = await jwt.verify(token);

    if (admin) {
        req.admin = admin;
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized"
        });
    }
};

module.exports = auth;
