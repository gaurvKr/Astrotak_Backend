import express from "express"
import mongoose from 'mongoose'
import AstrologerModel from "./model/Astrologer.js"
import BannerModel from "./model/Banner.js"
import HoroscopeModel from "./model/Horoscope.js"
import QuestionsModel from "./model/Questions.js"
import ReportModel from "./model/Reports.js"

const app = express()
const port = process.env.PORT || 5000

const url = 'mongodb+srv://pbic999:AsDf1234@cluster0.3icgg.mongodb.net/mydb?retryWrites=true&w=majority'

mongoose.connect(url).
then((res) => {console.log('connted to db');}).
catch((err) => {console.log(err);}) 

app.get('/astrologer',async (req,res) => {
    const astrologers = await AstrologerModel.find({});
    res.send(astrologers)
})

app.get('/banner',async (req,res) => {
    const astrologers = await BannerModel.find({});
    res.send(astrologers)
})

app.get('/Horoscope',async (req,res) => {
    const astrologers = await HoroscopeModel.find({});
    res.send(astrologers)
})

app.get('/question',async (req,res) => {
    const astrologers = await QuestionsModel.find({});
    res.send(astrologers)
})

app.get('/report',async (req,res) => {
    const astrologers = await ReportModel.find({});
    res.send(astrologers)
})

app.listen(port,() => {
    console.log(`Server is running on port no ${port}`);
})