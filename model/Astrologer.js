import mongoose from 'mongoose'

const AstrologerSchema = mongoose.Schema({
    urlSlug: String,
    namePrefix: String,
    firstName: String,
    lastName: String,
    aboutMe: String,
    profliePicUrl: String,
    experience: String,
    languages: Array,
    charge: String,
    isAvailable: Boolean,
    rating: String,
    skills: Array,
    isOnCall:Boolean,
    images: Object,
    availability: {
        days: Array,
        slot: Object
    }
})

const AstrologerModel = mongoose.model('astrologer',AstrologerSchema);

export default AstrologerModel