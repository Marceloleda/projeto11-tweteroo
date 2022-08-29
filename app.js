import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())

app.get('/tweet', (req, res)=>{
    res.send("oia tu aiiiiiiiiii")
})

app.listen(5000);
