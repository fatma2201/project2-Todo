const express=require('express')
const app=express()

const db=require('./db')
const Todo=require('./todo')
//console.log(Todo)
app.use(express.json())

app.get("/",(req,res)=>{
res.json('Get / is working')
})
app.get("/tasks",(req,res)=>{
    Todo.find({},(err,data)=>{
        if(err) {
         console.log('ERROR: ',err);

        } else {
            res.json('Get / is working');
        } 
    });
   
    });
    app.post("/tasks",(req,res)=>{
        console.log('25:',req.body)
       // Todo.create({},(err,newTask)=>{
            
        //    if(err) {
        //     console.log('ERROR: ',err);
    
        //    } else {
                res.status(201).json(newTask)
        //    }
       // });
       
        });
    

    

app.listen(5000,()=>{
    console.log('Server is working....')
})