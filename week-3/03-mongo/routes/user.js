const { Router, query } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const new_user = new User({
        username : req.headers.username,
        password : req.headers.password
    })
    try{
        await new_user.save();
        res.send("User Created successfully");
    }
    catch(err){
        res.status(503).send("Internal Server error");
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find();
        res.send(courses);
    }
    catch(error){
        res.status(501).send("INternal Server eRror");
    }

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    const filter = {
        "username" : username
    }

    try{
        const user = await User.findOne(filter);
        console.log(user);
        const purchased = user.purchased;
        purchased.push(courseId);
        console.log(purchased);
        const updated = await User.findOneAndUpdate(filter,{
            "purchased" : purchased
        })
        res.send(purchased);
    }
    catch(error){
        console.log(error);
        res.status(500).send("Couldnt process the purchase");
    }

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    try{
        const filter = {
            "username" : username
        }
        const user = await User.findOne(filter);
        const purchased = user.purchased;
        res.send(purchased);
    }
    catch(error){
        console.log(error);
        res.send("Error Broo!!")
    }
});

module.exports = router