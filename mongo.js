/* const {MongoClient} = require('mongodb')
const uri = 'mongodb://dutking-admin:mongo-du-123@62.84.121.167/feedbacks?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser:true, useUnifiedTopology:true})
client.connect(async err => {
    const collection = client.db('feedbacks').collection('test')

    const result = await collection.find().toArray()
    console.log(result)

    client.close()
}) */

const mongoose = require('mongoose')
const Feedback = require('./Feedback.js')

const uri = 'mongodb://dutking-admin:mongo-du-123@62.84.121.167/feedbacks?retryWrites=true&w=majority'

mongoose.connect(uri)

run()

async function run(){
    /* const feedback = new Feedback({
        user: 'Vasya',
        date: new Date(),
        text: 'trololo'
    })
    await feedback.save() */
    try{
        const feedback = await Feedback.create({
            user: 'Vasya',
            date: new Date(),
            text: 'booo'
        })
        console.log(feedback)
    } catch (e) {
        console.log(e.message)
    }
    
}

