const Product = require("../models/productModel")

exports.getAllProducts = async (req,res) =>{
    const products = await Product.find({})
    res.status(200).json({
        success: true,
        products
    })
}


// create product --admin
exports.createProduct = async (req, res, next) =>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// update product --admin
exports.updateProduct = async(req, res, next) =>{
    let product = await Product.findById(req.body.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message : "Product not found",
        })
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
