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

app.delete('/notes/:id',async(req,res)=>{
       const id = req.params.id 

       await noteModel.findOneAndDelete({
              _id:id
       })

       res.status(200).json({
              message:"note deleted successfully"
       })
})


// //update data by patch

app.patch("/notes/:id",async(req,res)=>{
       const id = req.params.id

       const description = req.body.description

       await noteModel.findByIdAndUpdate({_id:id},{description:description}) // it require two objects in first one ki app kis ke basis per maang rahe ho like id , title or dusre me ye batate ho kya update karna hai

       res.status(200).json({
              message:"note updated successfully"
       })
})





 


module.exports = app