const mongoose = require("mongoose");
const reviews = require("./reviews");
const Schema = mongoose.Schema;
const Review = require("./reviews.js")
//create schema

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,    
    url: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review",
    },
  ],
});

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in: listing.reviews}});
  }
    
});

//create model
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
