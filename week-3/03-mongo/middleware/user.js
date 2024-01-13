const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username,password);
    if(username && password){
        try{
            await User.findOne({
                "username" : username,
                "password" : password
            })
            next();
        }
        catch(error){
            console.log(error);
            res.status(443).send("INvalid CredeNtials");
        }
    }else{
        res.status(403).send("INput Erroe");
    }
}

module.exports = userMiddleware;