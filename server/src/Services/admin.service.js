const db = require("../config.mongodb");

class adminService {
    static async login(data) {
        return new  Promise(async (resolve, reject) => { 
             try {
            const { username, password } = await data;
            const admin = db.collection("admin").findOne({ username, password });
            if (!admin) { 
               resolve({ error: "Invalid username or password"})
            } else {
                resolve(admin);
            }
        } catch (err) { 
          
            reject(err);
        }
        })
    }
}


module.exports = adminService;