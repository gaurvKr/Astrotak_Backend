import mongoose from 'mongoose'

const QuestionsSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    suggestions: Array,
})

const QuestionsModel = mongoose.model('question',QuestionsSchema);

export default QuestionsModel