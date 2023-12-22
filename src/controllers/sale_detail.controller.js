import * as saleDetailServices from "../services/sale_detail.service.js"

//Get SaleDetails Method
export const getSaleDetails = (req, res) => {
    saleDetailServices.getSaleDetails()
        .then((result) => {
            res.status(200).json({
                message: "SaleDetails retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get SaleDetail Method
export const getSaleDetail = (req, res) => {
    const { id_sales, id_products } = req.params;
    saleDetailServices.getSaleDetail(id_sales, id_products)
    .then((result) => {
        res.status(200).json({
            message: "SaleDetail retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create SaleDetail Method
export const createSaleDetail = (req, res) => {
    const saleDetail = req.body;
    saleDetailServices.createSaleDetail(saleDetail)
        .then(() => {
            res.status(200).json({
                message: "SaleDetail created successfully",
                data: saleDetail,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update SaleDetail Method
export const updateSaleDetail = (req, res) => {
    const { id_sales, id_products } = req.params;
    const saleDetail = req.body;
    saleDetailServices.updateSaleDetail(id_sales, id_products, saleDetail)
        .then(() => {
            res.status(200).json({
                message: "SaleDetail updated successfully",
                data: saleDetail,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete SaleDetail Method
export const deleteSaleDetail = (req, res) => {
    const { id_sales, id_products } = req.params;
    saleDetailServices.deleteSaleDetail(id_sales, id_products)
        .then(() => {
            res.status(200).json({
                message: "SaleDetail deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};