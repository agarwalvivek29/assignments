const { notStrictEqual } = require("assert");
const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    if(username && password){
        try{
            const instance = await Admin.findOne({
                "username" : username,
                "password" : password
            })
            next();
        }
        catch(error){
            res.status(403).send("Access Denied")
        }
    }else{
        res.status(403).send("INput Erroe");
    }
}

module.exports = adminMiddleware;