
const mongoose=require('mongoose');
const Listing= require('../models/listing.js');
const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';
const initData=require('./data.js');

main().then(()=>{
    console.log("connection to DB");
 })
.catch((err)=>{
console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}
const initDB =async ()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj ,owner :'67fa690bb0771dc36756797a'}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
}
initDB();