import * as fiscalClientServices from "../services/fiscal_client.service.js"

//Get Fiscal Clients Method
export const getFiscalClients = (req, res) => {
    fiscalClientServices.getFiscalClients()
        .then((result) => {
            res.status(200).json({
                message: "FiscalClients retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Fiscal Client Method
export const getFiscalClient = (req, res) => {
    const { id } = req.params;
    fiscalClientServices.getFiscalClient(id)
    .then((result) => {
        res.status(200).json({
            message: "FiscalClient retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Fiscal Client Method
export const createFiscalClient = (req, res) => {
    const fiscalClient = req.body;
    fiscalClientServices.createFiscalClient(fiscalClient)
        .then(() => {
            res.status(200).json({
                message: "FiscalClient created successfully",
                data: fiscalClient,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Fiscal Client Method
export const updateFiscalClient = (req, res) => {
    const { id } = req.params;
    const fiscalClient = req.body;
    fiscalClientServices.updateFiscalClient(id, fiscalClient)
        .then(() => {
            res.status(200).json({
                message: "FiscalClient updated successfully",
                data: fiscalClient,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Fiscal Client Method
export const deleteFiscalClient = (req, res) => {
    const { id } = req.params;
    fiscalClientServices.deleteFiscalClient(id)
        .then(() => {
            res.status(200).json({
                message: "FiscalClient deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};