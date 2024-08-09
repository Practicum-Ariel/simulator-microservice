const generatorModel = require('../DL/generator.model')
const sensorModel = require('../DL/sensor.model')
const insightsDb = require('./../DL/insightsDB')

// name - gen<random>
let location = ['באר-שבע', 'ירושלים-כנסת', 'תל אביב-קריה', 'אשקלון', 'עכו', 'חיפה-אוניברסיטה', 'שדרות', 'צפת', 'תל אביב-אוניברסיטה', 'דימונה']
let sensorsIdsArray = ['66782147502144fe911c79f6', '66782147502144fe911c79f9', '66782147502144fe911c79fa', '66782147502144fe911c79fb', '66782147502144fe911c79fc', '66782147502144fe911c79f7', '66782147502144fe911c79fe', '66782147502144fe911c79f8', '66782147502144fe911c7a00', '66782147502144fe911c7a01', '66782147502144fe911c79fd', '66782147502144fe911c79ff']
// status ['proper', 'anomaly', 'error', 'disconnect']
// insights
// isActive - true, if disconnect- false
// dataTableName = name

async function addGenerators() {
    let generators = []
    for(let i = 0; i < 30; i++){
        let randomName = Math.floor(Math.random() * (1000 - 100)) + 100
        let randomLocation = Math.floor(Math.random() * 10)
        let numOfInsights = Math.floor(Math.random() * (16 - 1)) + 1
        let insights = []
        for(let j=0; j<numOfInsights; j++)
        {
            let randomInsights = Math.floor(Math.random() * 78)
            insights.push(insightsDb[randomInsights])
        }
        let generator = {
            name: 'gen'+randomName,
            location: location[randomLocation],
            sensorsIds: sensorsIdsArray,
            status: 'proper',
            insights: insights,
            isActive: true,
            dataTableName: 'gen'+randomName,
        }
        generators.push(generator)
    }
    for(let i = 0; i < 7; i++){
        let randomName = Math.floor(Math.random() * (1000 - 100)) + 100
        let randomLocation = Math.floor(Math.random() * 10)
        let numOfInsights = Math.floor(Math.random() * (16 - 1)) + 1
        let insights = []
        for(let j=0; j<numOfInsights; j++)
        {
            let randomInsights = Math.floor(Math.random() * 78)
            insights.push(insightsDb[randomInsights])
        }
        let generator = {
            name: 'gen'+randomName,
            location: location[randomLocation],
            sensorsIds: sensorsIdsArray,
            status: 'anomaly',
            insights: insights,
            isActive: true,
            dataTableName: 'gen'+randomName,
        }
        generators.push(generator)
    }
    for(let i = 0; i < 7; i++){
        let randomName = Math.floor(Math.random() * (1000 - 100)) + 100
        let randomLocation = Math.floor(Math.random() * 10)
        let numOfInsights = Math.floor(Math.random() * (16 - 1)) + 1
        let insights = []
        for(let j=0; j<numOfInsights; j++)
        {
            let randomInsights = Math.floor(Math.random() * 78)
            insights.push(insightsDb[randomInsights])
        }
        let generator = {
            name: 'gen'+randomName,
            location: location[randomLocation],
            sensorsIds: sensorsIdsArray,
            status: 'error',
            insights: insights,
            isActive: false,
            dataTableName: 'gen'+randomName,
        }
        generators.push(generator)
    }
    for(let i = 0; i < 6; i++){
        let randomName = Math.floor(Math.random() * (1000 - 100)) + 100
        let randomLocation = Math.floor(Math.random() * 10)
        let numOfInsights = Math.floor(Math.random() * (16 - 1)) + 1
        let insights = []
        for(let j=0; j<numOfInsights; j++)
        {
            let randomInsights = Math.floor(Math.random() * 78)
            insights.push(insightsDb[randomInsights])
        }
        let generator = {
            name: 'gen'+randomName,
            location: location[randomLocation],
            sensorsIds: sensorsIdsArray,
            status: 'disconnected',
            insights: [],
            isActive: false,
            dataTableName: 'gen'+randomName,
        }
        generators.push(generator)
    }
    
    await generatorModel.create(generators)
}

module.exports = {addGenerators}