const gen300Model = require('../DL/gen300.model')
const sensorModel = require('../DL/sensor.model')
let { allIntervals } = require('./DL/data_interval');

const times = {
    'day': { numOfEvents: 48, interval: 1800000 },
    'week': { numOfEvents: 168, interval: 3600000 },
    'month': { numOfEvents: 720, interval: 3600000 }
}

const sensors = {
    'temperature': ['t1', 't2', 't3', 't4'],
    'sound': ['s1', 's2', 's3', 's4'],
    'vibration': ['v1', 'v2', 'v3', 'v4']
}

const percentagesOfTime = {
    'normal': [0.6, 0.1, 0.1, 0.1, 0.1],
    'mild': [0.4, 0.2, 0.1, 0.2, 0.1],
    'moderate': [0.2, 0.3, 0.1, 0.3, 0.1],
    'severe': [0.2, 0.3, 0.2, 0.2, 0.1],
}

const initialDate = new Date('May 24 2024').getTime()

// create all fake data
async function createAllFakeData() {
    for (sensor of Object.keys(sensors)) {
        for (time of Object.keys(times)) {
            for (scenario of Object.keys(percentagesOfTime)) {
                await createMultipleEvents(sensor, time, scenario)
            }
        }
    }
}

// ~~ history data functions ~~
async function createMultipleEvents(sensorType, time, scenario) {

    const scenarioId = `${times[time].numOfEvents}.${sensorType}.${scenario}`

    let scenarioFromDB = await sensorModel.findOne({ sensorType })
    let minValue = scenarioFromDB[scenario + 'AnomalyMin']
    let maxValue = scenarioFromDB[scenario + 'AnomalyMax']

    const rangesPerScenario = {
        'normal': [[minValue, maxValue], [minValue - 10, maxValue - 10], [minValue, maxValue], [minValue + 10, maxValue + 10], [minValue, maxValue]],
        'mild': [[minValue, maxValue], [minValue + 10, maxValue + 10], [minValue, maxValue], [minValue - 10, maxValue - 10], [minValue, maxValue]],
        'moderate': [[minValue, maxValue], [minValue + 10, maxValue + 10], [minValue, maxValue], [minValue - 10, maxValue - 10], [minValue, maxValue]],
        'severe': [[minValue, maxValue], [minValue + 10, maxValue + 10], [minValue + 20, maxValue + 20], [minValue + 30, maxValue + 30], [minValue + 40, maxValue + 40]],
    }

    for (let i = 0; i < 5; i++) {
        createEvents(scenarioId, sensorType, rangesPerScenario[scenario][i][0], rangesPerScenario[scenario][i][1], times[time].numOfEvents * percentagesOfTime[scenario][i], times[time].interval)
    }
}

async function createEvents(scenarioId, sensorType, minValue, maxValue, numOfEvents, interval) {
    let events = []
    if (minValue < 0) minValue = 0
    for (let i = 0; i < numOfEvents; i++) {
        let generatorEvent = {
            scenarioId,
            date: initialDate + (interval * i),
            [sensors[sensorType][0]]: getRandomIntInclusive(minValue, maxValue),
            [sensors[sensorType][1]]: getRandomIntInclusive(minValue, maxValue),
            [sensors[sensorType][2]]: getRandomIntInclusive(minValue, maxValue),
            [sensors[sensorType][3]]: getRandomIntInclusive(minValue, maxValue),
        }

        events.push(generatorEvent)
    }
    await gen300Model.create(events)
}

// ~~ live functions ~~
async function createMultipleLiveEvents(sensorType, numOfEvents, scenario, interval) {
    const scenarioId = `live.${numOfEvents}.${sensorType}.${scenario}`

    let scenarioFromDB = await sensorModel.findOne({ sensorType })
    let minValue = scenarioFromDB[scenario + 'AnomalyMin']
    let maxValue = scenarioFromDB[scenario + 'AnomalyMax']

    const rangesPerScenario = {
        'normal': [[minValue, maxValue], [minValue - 10, maxValue - 10], [minValue, maxValue], [minValue + 10, maxValue + 10], [minValue, maxValue]],
        'mild': [[minValue, maxValue], [minValue + 10, maxValue + 10], [minValue, maxValue], [minValue - 10, maxValue - 10], [minValue, maxValue]],
        'moderate': [[minValue, maxValue], [minValue + 10, maxValue + 10], [minValue, maxValue], [minValue - 10, maxValue - 10], [minValue, maxValue]],
        'severe': [[minValue, maxValue], [minValue + 10, maxValue + 10], [minValue + 20, maxValue + 20], [minValue + 30, maxValue + 30], [minValue + 40, maxValue + 40]],
    }

    const events = []
    for (let i = 0; i < 5; i++) {
        events.push(...createLiveEvents(scenarioId, sensorType, rangesPerScenario[scenario][i][0], rangesPerScenario[scenario][i][1], numOfEvents * percentagesOfTime[scenario][i], interval))
    }
    let intervalLive = setInterval(async function () {
        if (events.length != 0)
            await gen300Model.create(events.shift())
        else {
            clearInterval(intervalLive)
        }
    }, (interval * 1000))

    allIntervals[scenarioId]=intervalLive
    return scenarioId;
}

function createLiveEvents(scenarioId, sensorType, minValue, maxValue, numOfEvents) {
    let events = []
    if (minValue < 0) minValue = 0
    for (let i = 0; i < numOfEvents; i++) {
        let generatorEvent = {
            scenarioId,
            [sensors[sensorType][0]]: getRandomIntInclusive(minValue, maxValue),
            [sensors[sensorType][1]]: getRandomIntInclusive(minValue, maxValue),
            [sensors[sensorType][2]]: getRandomIntInclusive(minValue, maxValue),
            [sensors[sensorType][3]]: getRandomIntInclusive(minValue, maxValue),
        }

        events.push(generatorEvent)
    }
    return events;
}

module.exports = { createAllFakeData, createMultipleEvents, createMultipleLiveEvents }

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}