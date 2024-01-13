const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;
    const admin_new = new Admin({
        username: username,
        password: password
    })
    
    try{
        await admin_new.save();
        res.send("Admin Created Successfully");
    }
    catch(err){
        res.status(500).send("Internal err");
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body["title"];
    const description = req.body["description"];
    const price = req.body["price"];
    const imgLink = req.body["imageLink"];

    const new_course = new Course({
        title : title,
        description : description,
        price : price,
        imageLink : imgLink
    });

    try{
        await new_course.save();
        res.send("Course created successfully");
    }
    catch(err){
        res.status(503).send("internal errror");
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find()
        res.send(courses);
    }
    catch(error){
        res.status(403).send("Errror Fetching the list of COurses");
    }
});

module.exports = router;