const adminService = require("../Services/admin.service");
const tokenService = require("../Services/jwt.service");

class admin {
    async login(req, res) {
        try {
            const admin = await adminService.login(req.body);

            if (!admin) {
                return res.status(401).json({
                    message: "invalid username or password",
                    variant: "error",
                });
            }
            res.status(200).json({
                message: "Login successful",
                variant: "success",
                data: admin,
                token: await tokenService.token(admin),
            })
        } catch (err) {
            res.status(500).json({
                message: "internal server error",
                variant: "error",
                error: err,
            }
            )
        }
    }
}



module.exports = new admin();