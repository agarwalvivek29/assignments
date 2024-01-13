const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://agarwalvivek2902:100xdevs@cluster0.v8panrh.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String
    },
    password : {
        type : String
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String
    },
    password : {
        type : String
    },
    purchased : {
        type : [String]
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: {
        type : Number
    },
    title : {
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : Number
    },
    imageLink : {
        type : String
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}