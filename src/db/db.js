const mongoose = require("mongoose");


async function connectDB(params) {
    await mongoose.connect("mongodb+srv://adarshsingh:lucifer90054@complete-backed.u1fyj2u.mongodb.net/haelly ") // use to connect the databse to the server
    console.log("connected to DB")
}

module.exports = connectDB;