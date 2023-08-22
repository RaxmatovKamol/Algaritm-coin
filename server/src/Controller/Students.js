

class student {
    async add(req,res) {
        console.log(req.body);
    }
}

module.exports = new student();