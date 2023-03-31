const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorhandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

// get all product
exports.getAllProducts = catchAsyncErrors(
    async (req,res) =>{
        const products = await Product.find({})
        res.status(200).json({
            success: true,
            products
        })
    }
)


// get product details
exports.getProductDetail = catchAsyncErrors(
    async (req, res, next)=>{
        const product = await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandler("Product now found", 500));
            return res.status(500).json({
                success:false,
                message :"Product not found",
            })
        }
    
        return res.status(200).json({
            success:true,
            product,
        })
    }
    
)
// create product --admin
exports.createProduct = catchAsyncErrors(
    async (req, res, next) =>{
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            product
        })
    }
)

// update product --admin
exports.updateProduct = catchAsyncErrors(
    async(req, res, next) =>{
        let product = await Product.findById(req.body.id);
        if(!product){
            return next(new ErrorHandler("Product Now Found", 500));
            // return res.status(500).json({
            //     success:false,
            //     message : "Product not found",
            // })
        }

        product = await Product.findByIdAndUpdate(req.body.id, req.body,{
            new :true,
            runValidators :true,
            useFindAndModify : false,
        });

        return res.status(200).json({
            success:true,
            product
        })

    }

)
// delete product --admin
exports.deleteProduct = catchAsyncErrors(
    async (req, res, next) => {
        let product = await Product.findById(req.body.id);
    
        if(!product){
            return next(new ErrorHandler("Product Now found", 500));
        }
    
        product = await Product.findByIdAndDelete(req.body.id);
        return res.status(200).json({
            success: true,
            message: "Product deleted",
        })
    }
)