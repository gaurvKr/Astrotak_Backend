import mongoose from 'mongoose'

const BannerSchema = mongoose.Schema({
    image: String,
    url: String
})

const BannerModel = mongoose.model('Banner',BannerSchema);

export default BannerModel