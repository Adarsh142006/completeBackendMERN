const express = require("express")

const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())

// const notes = []

// //send the notes from the server

app.post("/notes",async(req,res) =>{
       const data = req.body

       await noteModel.create({
              title:data.title,
              description:data.description
       })

       res.status(201).json({
              message:"note created successfully"
       })
})

// //get notes fetch from the server

app.get('/notes',async(req,res)=>{

       const notes  = await noteModel.find();// find gives data in form of array of object  [...]  ye sub jo find kar degi 

       // we can also use findone method to find exact note 
       //findone({ title:"task_title"}) // like this


       res.status(200).json({
              message:"notes fetched successfylly",
              notes:notes
       })
})

// //delete the node from the server

// app.delete('/notes/:index',(req,res)=>{
//        const index = req.params.index 

//        delete notes[index]

//        res.status(200).json({
//               message:"note deleted successfully"
//        })
// })


// //update data by patch

// app.patch("/notes/:index",(req,res)=>{
//        const index = req.params.index

//        const description = req.body.description

//        const title = req.body.title

//        notes[index].description  =  description

//        notes[index].title = title

//        res.status(200).json({
//               message:"note updated successfully"
//        })
// })





 


module.exports = app