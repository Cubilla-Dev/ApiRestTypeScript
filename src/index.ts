import express from 'express';
const app = express()
app.use(express.json()) //middleware que transforma las req.body a un json

const PORT = 3000
//el guion bajo es para ignorarlo para que no se este quejando el editor porque no se esta utilizando
app.get('/ping', (_req, res)=> {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})