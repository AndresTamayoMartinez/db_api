import * as pucharseService from "../services/purchase_receipt.service.js";
//Get Sale by ID Method
export const getSale = (req, res) => {
    const { id } = req.params;
    pucharseService.getSale(id)
    .then((result) => {
        res.status(200).json({
            message: "Sale retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Get SaleDetails by ID Method
export const getSaleDetails = (req, res) => {
    const { id } = req.params;
    pucharseService.getSaleDetails(id)
    .then((result) => {
        res.status(200).json({
            message: "SaleDetails retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};