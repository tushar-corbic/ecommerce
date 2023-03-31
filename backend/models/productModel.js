const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter the Name"],
    },
    description:{
        type : String,
        required : [true, "Please Enter the description"],
    },
    price:{
        type: Number,
        required:[true, "Please Enter the product Price"],
        maxLength : [6, "Price cannot exceed 6 characters"],
    },
    rating:{
        type: Number,
        default:0,
    },
    images:[
        {
            public_id: {
                type: String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
    ],
    category:{
        type: String,
        required:[true, "Please enter the category"],
    },
    stock:{
        type:Number,
        required:[true, "Please enter the stock"],
        maxLength:[3, "stock cannot exceed 3 characters"],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type:String,
                required:[true, "Please provide the name of review"],
            },
            rating:{
                type: String,
                required: true,
            },
            comment:{
                type : String,
                required : true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default : Date.now,
    }
})

module.exports = mongoose.model("Product", productSchema);