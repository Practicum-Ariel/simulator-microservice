let sensors = [
    {
        'sensorType': 'temperature',
        'name': 't1',
        'location': 'Near the generator\'s combustion chamber',
        'unitOfMeasure': 'c',
        'normalAnomalyMin': 70,
        'normalAnomalyMax': 90,
        'mildAnomalyMin': 90,
        'mildAnomalyMax': 100,
        'moderateAnomalyMin': 100,
        'moderateAnomalyMax': 110,
        'severeAnomalyMin': 110,
        'severeAnomalyMax': 150,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'temperature',
        'name': 't2',
        'location': 'On the coolant inlet',
        'unitOfMeasure': 'C',
        'normalAnomalyMin': 70,
        'normalAnomalyMax': 90,
        'mildAnomalyMin': 90,
        'mildAnomalyMax': 100,
        'moderateAnomalyMin': 100,
        'moderateAnomalyMax': 110,
        'severeAnomalyMin': 110,
        'severeAnomalyMax': 150,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'temperature',
        'name': 't3',
        'location': 'On the coolant outlet',
        'unitOfMeasure': 'C',
        'normalAnomalyMin': 70,
        'normalAnomalyMax': 90,
        'mildAnomalyMin': 90,
        'mildAnomalyMax': 100,
        'moderateAnomalyMin': 100,
        'moderateAnomalyMax': 110,
        'severeAnomalyMin': 110,
        'severeAnomalyMax': 150,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'temperature',
        'name': 't4',
        'location': 'Near the exhaust outlet',
        'unitOfMeasure': 'C',
        'normalAnomalyMin': 70,
        'normalAnomalyMax': 90,
        'mildAnomalyMin': 90,
        'mildAnomalyMax': 100,
        'moderateAnomalyMin': 100,
        'moderateAnomalyMax': 110,
        'severeAnomalyMin': 110,
        'severeAnomalyMax': 150,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'sound',
        'name': 's1',
        'location': 'Near the combustion chamber',
        'unitOfMeasure': 'db',
        'normalAnomalyMin': 60,
        'normalAnomalyMax': 70,
        'mildAnomalyMin': 70,
        'mildAnomalyMax': 75,
        'moderateAnomalyMin': 75,
        'moderateAnomalyMax': 80,
        'severeAnomalyMin': 80,
        'severeAnomalyMax': 90,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'sound',
        'name': 's2',
        'location': 'Close to the generator bearings',
        'unitOfMeasure': 'db',
        'normalAnomalyMin': 60,
        'normalAnomalyMax': 70,
        'mildAnomalyMin': 70,
        'mildAnomalyMax': 75,
        'moderateAnomalyMin': 75,
        'moderateAnomalyMax': 80,
        'severeAnomalyMin': 80,
        'severeAnomalyMax': 90,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'sound',
        'name': 's3',
        'location': 'Near the generator\'s cooling fan',
        'unitOfMeasure': 'db',
        'normalAnomalyMin': 60,
        'normalAnomalyMax': 70,
        'mildAnomalyMin': 70,
        'mildAnomalyMax': 75,
        'moderateAnomalyMin': 75,
        'moderateAnomalyMax': 80,
        'severeAnomalyMin': 80,
        'severeAnomalyMax': 90,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'sound',
        'name': 's4',
        'location': 'Near the exhaust system',
        'unitOfMeasure': 'db',
        'normalAnomalyMin': 60,
        'normalAnomalyMax': 70,
        'mildAnomalyMin': 70,
        'mildAnomalyMax': 75,
        'moderateAnomalyMin': 75,
        'moderateAnomalyMax': 80,
        'severeAnomalyMin': 80,
        'severeAnomalyMax': 90,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'vibration',
        'name': 'v1',
        'location': 'On the generator base frame (X-axis)',
        'unitOfMeasure': 'mms',
        'normalAnomalyMin': 0,
        'normalAnomalyMax': 10,
        'mildAnomalyMin': 10,
        'mildAnomalyMax': 15,
        'moderateAnomalyMin': 15,
        'moderateAnomalyMax': 20,
        'severeAnomalyMin': 20,
        'severeAnomalyMax': 30,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'vibration',
        'name': 'v2',
        'location': 'On the generator shaft (Y-axis)',
        'unitOfMeasure': 'mms',
        'normalAnomalyMin': 0,
        'normalAnomalyMax': 10,
        'mildAnomalyMin': 10,
        'mildAnomalyMax': 15,
        'moderateAnomalyMin': 15,
        'moderateAnomalyMax': 20,
        'severeAnomalyMin': 20,
        'severeAnomalyMax': 30,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'vibration',
        'name': 'v3',
        'location': 'On the generator bearings (Z-axis)',
        'unitOfMeasure': 'mms',
        'normalAnomalyMin': 0,
        'normalAnomalyMax': 10,
        'mildAnomalyMin': 10,
        'mildAnomalyMax': 15,
        'moderateAnomalyMin': 15,
        'moderateAnomalyMax': 20,
        'severeAnomalyMin': 20,
        'severeAnomalyMax': 30,
        'permission': 'admin',
        'isActive': true

    },
    {
        'sensorType': 'vibration',
        'name': 'v4',
        'location': 'Near the coupling between the generator and the drive motor (3-axis measurement)',
        'unitOfMeasure': 'mms',
        'normalAnomalyMin': 0,
        'normalAnomalyMax': 10,
        'mildAnomalyMin': 10,
        'mildAnomalyMax': 15,
        'moderateAnomalyMin': 15,
        'moderateAnomalyMax': 20,
        'severeAnomalyMin': 20,
        'severeAnomalyMax': 30,
        'permission': 'admin',
        'isActive': true

    },
]

let sensorsIds = []

let generators = [{
    'name': 'gen300',
    'location': 'Beer Sheva',
    'constructuredAt': new Date('18 Mar 2022 10:50:34 GMT').getTime(),
    'sensorsIds': sensorsIds,
    'generatorData': [],
    'insights': []
}]

let gen300 = []
let generator = []
let alert = []

const sensorModel = require('./sensor.model')

async function getIds(filter = {}) {
    const sensors = await sensorModel.find(filter);
    sensors.forEach(sens => sensorsIds.push(sens._id))
}

const go = async () => {
    // התחברות ל-DB
    try {
        console.log('@@@@ start @@@@')
        const db = require('./db')
        await db.connect()

        
        // await getIds();
        
        // // ייבוא המודל
        // const gen300Model = require('./gen300.model')
        // //    // // הפעלת פונקציה ליצירת נתונים
        // await gen300Model.create(gen300)

        // // ייבוא המודל
        // const generatorModel = require('./generator.model')
        // //    // // הפעלת פונקציה ליצירת נתונים
        // await generatorModel.create(generator)

        // ייבוא המודל
        const alertModel = require('./alerts.model')
        //    // // הפעלת פונקציה ליצירת נתונים
        await alertModel.create(alert)

        console.log('@@@@ done @@@@')
    } catch (err) {
        console.log(err);
    }
}

go()