const alertrModel = require('../DL/alerts.model')
const sensorModel = require('../DL/sensor.model')

let genIds = ['gen300', 'gen728', 'gen144', 'gen286', 'gen848']
let sensorsIdsArray = ['66782147502144fe911c79f6', '66782147502144fe911c79f9', '66782147502144fe911c79fa', '66782147502144fe911c79fb', '66782147502144fe911c79fc', '66782147502144fe911c79f7', '66782147502144fe911c79fe', '66782147502144fe911c79f8', '66782147502144fe911c7a00', '66782147502144fe911c7a01', '66782147502144fe911c79fd', '66782147502144fe911c79ff']
let anomaly = ['mild', 'moderate', 'severe']

async function addAlerts() {
    let alerts = []
    for (let i = 0; i < 5; i++) {
        let randomSensor = Math.floor(Math.random() * 12)
        let randomAnomaly = Math.floor(Math.random() * 3)

        let sensorFromDB = await sensorModel.findOne({ _id : sensorsIdsArray[randomSensor] })
        let maxValue = sensorFromDB[anomaly[randomAnomaly] + 'AnomalyMax'] + 10

        let alert = {
            genId: genIds[i],
            sensor: sensorsIdsArray[randomSensor],
            anomaly: anomaly[randomAnomaly],
            value: maxValue
        }
        alerts.push(alert)
    }
    await alertrModel.create(alerts)
}

module.exports = { addAlerts }