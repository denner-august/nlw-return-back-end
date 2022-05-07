import express from 'express'

const app = express()

const porta = 3333

app.get('/user', (req, res) => {
    return res.json('funcionando').status(200)

})

app.listen(porta, () => console.log(`http://localhost:${porta}`))