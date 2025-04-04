import * as facturamaService from "../services/facturama.service.js"

//Get Payments Forms Method
export const getPaymentsForms = (req, res) => {
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
export const getFiscalRegimens = (req, res) => {
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
export const getCfdiUses = (req, res) => {
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

//Get Cfdi Content Method
export const getCfdiContent = (req, res) => {
    const { cfdiId } = req.params;
    facturamaService.getCfdiContent(cfdiId)
        .then(() => {
            res.status(200).json({
                
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Create Cfdi Method
export const createCfdi = (req, res) => {
    const cfdi = req.body;
    facturamaService.createCfdi(cfdi)
    .then((result) => {
        res.status(200).json({
            result
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};