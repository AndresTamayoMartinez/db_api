import * as saleService from "../services/sale.service.js"

//Get Sales Method
export const getSales = (req, res) => {
    saleService.getSales()
        .then((result) => {
            res.status(200).json({
                message: "Sales retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Sale Method
export const getSale = (req, res) => {
    const { id } = req.params;
    saleService.getSale(id)
    .then((result) => {
        res.status(200).json({
            message: "Sale retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Sale Method
export const createSale = (req, res) => {
    const sale = req.body;
    saleService.createSale(sale)
        .then((resolve) => {
            res.status(200).json({
                message: "Sale created successfully",
                id: resolve,
                data: sale,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Sale Method
export const updateSale = (req, res) => {
    const { id } = req.params;
    const sale = req.body;
    saleService.updateSale(id, sale)
        .then(() => {
            res.status(200).json({
                message: "Sale updated successfully",
                data: sale,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Sale Method
export const updateSaleSubtotal = (req, res) => {
    const { id } = req.params;
    const sale = req.body;
    saleService.updateSaleSubtotal(id, sale)
        .then(() => {
            res.status(200).json({
                message: "SaleSubtotal updated successfully",
                data: sale,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Sale Method
export const deleteSale = (req, res) => {
    const { id } = req.params;
    saleService.deleteSale(id)
        .then(() => {
            res.status(200).json({
                message: "Sale deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Sale Method
export const deleteSalesDetails = (req, res) => {
    const { id } = req.params;
    saleService.deleteSalesDetails(id)
        .then(() => {
            res.status(200).json({
                message: "Sale Detail deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};