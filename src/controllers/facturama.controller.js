import * as facturamaService from "../services/facturama.service.js"

export const getPaymentsForms = async (req, res) => {
    try{
        const paymentsForms = await facturamaService.getPaymentsForms();
        res.json(paymentsForms);
    } catch (error) {
        res.status(500).send(error)
    }
}