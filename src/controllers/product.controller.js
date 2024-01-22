import * as productServices from "../services/product.service.js"

//Get All Products Method
export const getProducts = (req, res) => {
    productServices.getProducts()
        .then((result) => {
            res.status(200).json({
                message: "Products retievred successfully",
                data: result[0]
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Product by Id Method
export const getProduct = (req, res) => {
    const { id } = req.params;
    productServices.getProduct(id)
    .then((result) => {
        res.status(200).json({
            message: "Product retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Get Product by Name Method
export const getProductbyName = (req, res) => {
    const { nombre } = req.params;
    productServices.getProductbyName(nombre)
    .then((result) => {
        res.status(200).json({
            message: "Product retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Product Method
export const createProduct = (req, res) => {
    const product = req.body;
    productServices.createProduct(product)
        .then(() => {
            res.status(200).json({
                message: "Product created successfully",
                data: product,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Product Method
export const updateProduct = (req, res) => {
    const { id } = req.params;
    const product = req.body;
    productServices.updateProduct(id, product)
        .then(() => {
            res.status(200).json({
                message: "Product updated successfully",
                data: product,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Product Method
export const deleteProduct = (req, res) => {
    const { id } = req.params;
    productServices.deleteProduct(id)
        .then(() => {
            res.status(200).json({
                message: "Product deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};