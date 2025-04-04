import * as facturamaService from "../services/facturama.service.js"

//Get Payments Forms from Facturama
export const getPaymentsForms = async (req, res) => {
    facturamaService.getPaymentsForms()
        .then((result) => {
            res.status(200).json({
                message: "Payments Forms retrieved successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};