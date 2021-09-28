import mongoose from 'mongoose'

const ReportSchema = mongoose.Schema({
    image: String,
    url: String,
    price: String
})

const ReportModel = mongoose.model('report',ReportSchema);

export default ReportModel