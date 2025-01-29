import * as fiscalClientServices from "../services/fiscal_client.service.js"

//Get Fiscal Clients Method
export const getFiscalClients = (req, res) => {
    employeeServices.getFiscalClients()
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
    employeeServices.getFiscalClient(id)
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
    const employee = req.body;
    employeeServices.createFiscalClient(employee)
        .then(() => {
            res.status(200).json({
                message: "FiscalClient created successfully",
                data: employee,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Fiscal Client Method
export const updateFiscalClient = (req, res) => {
    const { id } = req.params;
    const employee = req.body;
    employeeServices.updateFiscalClient(id, employee)
        .then(() => {
            res.status(200).json({
                message: "FiscalClient updated successfully",
                data: employee,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Fiscal Client Method
export const deleteFiscalClient = (req, res) => {
    const { id } = req.params;
    employeeServices.deleteFiscalClient(id)
        .then(() => {
            res.status(200).json({
                message: "FiscalClient deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};