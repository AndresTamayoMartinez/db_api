import * as providerServices from "../services/provider.service.js";

//Get Providers Method
export const getProviders = (req, res) => {
    providerServices.getProviders()
        .then((result) => {
            res.status(200).json({
                message: "Providers retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Provider Method
export const getProvider = (req, res) => {
    const { id } = req.params;
    providerServices.getProvider(id)
    .then((result) => {
        res.status(200).json({
            message: "Provider retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Provider Method
export const createProvider = (req, res) => {
    const provider = req.body;
    providerServices.createProvider(provider)
        .then(() => {
            res.status(200).json({
                message: "Provider created successfully",
                data: provider,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Provider Method
export const updateProvider = (req, res) => {
    const { id } = req.params;
    const provider = req.body;
    providerServices.updateProvider(id, provider)
        .then(() => {
            res.status(200).json({
                message: "Provider updated successfully",
                data: provider,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Provider Method
export const deleteProvider = (req, res) => {
    const { id } = req.params;
    providerServices.deleteProvider(id)
        .then(() => {
            res.status(200).json({
                message: "Provider deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};