import * as clientServices from "../services/client.service.js"

//Get Clients Method
export const getClients = (req, res) => {
    clientServices.getClients()
        .then((result) => {
            res.status(200).json({
                message: "Clients retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Client Method
export const getClient = (req, res) => {
    const { id } = req.params;
    clientServices.getClient(id)
    .then((result) => {
        res.status(200).json({
            message: "Client retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Client Method
export const createClient = (req, res) => {
    const client = req.body;
    clientServices.createClient(client)
        .then(() => {
            res.status(200).json({
                message: "Client created successfully",
                data: client,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Client Method
export const updateClient = (req, res) => {
    const { id } = req.params;
    const client = req.body;
    clientServices.updateClient(id, client)
        .then(() => {
            res.status(200).json({
                message: "Client updated successfully",
                data: client,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Client Method
export const deleteClient = (req, res) => {
    const { id } = req.params;
    clientServices.deleteClient(id)
        .then(() => {
            res.status(200).json({
                message: "Client deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};