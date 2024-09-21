const express = require('express'),
    app = express(),
    PORT = 2700,
    cors = require('cors'),
    gen300Service = require('./BL/gen300.service'),
    generatorService = require('./BL/generator.service'),
    alertService = require('./BL/alert.service');

app.use(cors())
app.use(express.json())

const { allIntervals } = require('./DL/data_interval');
// connect to mongoDB
const db = require('./DL/db')
db.connect()

app.post('/createHistoryData', async (req, res) => {
    try {
        let { sensorType, time, scenario } = req.body
        let scenarioId = await gen300Service.createMultipleEvents(sensorType, time, scenario)
        res.send(scenarioId)
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

app.post('/live/start', async (req, res) => {
    try {
        let { temperature, sound, vibration, numOfEvents, interval } = req.body
        let scenarioId = await gen300Service.sendInterval(temperature, sound, vibration, numOfEvents, interval)
        res.send(scenarioId)
    } catch (err) {
        console.log(err.message);
        res.status(err.code || 400).send(err.message)
    }
})

app.post('/live/stop', async (req, res) => {
    try {
        let senc = allIntervals[req.body?.scenarioId]
        if (senc) {
            clearInterval(senc)
            delete allIntervals[req.body.scenarioId]
        }
        res.send(senc ? 'stop interval' : 'interval not exist')
    } catch (err) {
        console.log(err.message);
        res.status(err.code || 400).send(err.message)
    }
})


app.post('/createGenerators', async (req, res) => {
    try {
        await generatorService.addGenerators()
        res.send('success to create All!')
    } catch (err) {
        console.log(err.message);
        res.status(err.code || 400).send(err.message)
    }
})

app.post('/createAlerts', async (req, res) => {
    try {
        await alertService.addAlerts()
        res.send('success to create All!')
    } catch (err) {
        console.log(err.message);
        res.status(err.code || 400).send(err.message)
    }
})


app.listen(PORT, () => console.log('#### Server is up ####'))
