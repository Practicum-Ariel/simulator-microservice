const express = require('express'),
    app = express(),
    PORT = 2700,
    cors = require('cors'),
    gen300Service = require('./BL/gen300.service');

app.use(cors())
app.use(express.json())

// connect to mongoDB
const db = require('./DL/db')
db.connect()

app.post('/createHistoryData', async (req, res) => {
    try {
        let { sensorType, time, scenario } = req.body
        await gen300Service.createMultipleEvents(sensorType, time, scenario)
        res.send('success!')
    } catch (err) {
        console.log(err.message); 
        res.status(err.code || 400).send(err.message)
    }
})

app.post('/createAllFakeData', async (req, res) => {
    try {
        await gen300Service.createAllFakeData()
        res.send('success to create All!')
    } catch (err) {
        console.log(err.message); 
        res.status(err.code || 400).send(err.message)
    }
})


app.listen(PORT, () => console.log('#### Server is up ####'))
