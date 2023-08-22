const jwt = require("jsonwebtoken");

const salt = process.env.SALT;





class jwtService {
    static async token(data) {
        return new Promise(async (resolve,reject) => {
            try {
                const token = jwt.sign(data,salt);
                resolve(token);
            } catch (err) {
                reject(err);
            }
        });
    }

    static async verify(token) {
        try {
            return jwt.verify(token,salt);

        } catch (err) {
            return false;
        }
    }
}



module.exports = jwtService;