import express ,{Express}from 'express';

const app:Express = express();

// Middleware to parse JSON requests

app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", (req, res) => {
    const {userId } = req.params;
    const { zapId } = req.params;
    //store in a db a new trigger
    //push it on to a queue(redis)
    //notify the user via email or slack
    //trigger a new zap scan
    

    
})
//server port

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})