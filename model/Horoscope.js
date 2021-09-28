import mongoose from 'mongoose'

const HoroscopeSchema = mongoose.Schema({
    name: String,
    date: String,
    img: String,
    images: Array,
    urlSlug: String,
})

const HoroscopeModel = mongoose.model('horoscope',HoroscopeSchema);

export default HoroscopeModel