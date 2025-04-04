import * as facturamaService from "../services/facturama.service.js"

//Get Payments Forms Method
export const getPaymentsForms = async (req, res) => {
    facturamaService.getPaymentsForms()
        .then((result) => {
            res.status(200).json({
                message: "Payments Forms retrieved successfully",
                data: result,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Payments Forms Method
export const getFiscalRegimens = async (req, res) => {
    facturamaService.getFiscalRegimens()
        .then((result) => {
            res.status(200).json({
                message: "Payments Forms retrieved successfully",
                data: result,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Payments Forms Method
export const getCfdiUses = async (req, res) => {
    facturamaService.getCfdiUses()
        .then((result) => {
            res.status(200).json({
                message: "Payments Forms retrieved successfully",
                data: result,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};