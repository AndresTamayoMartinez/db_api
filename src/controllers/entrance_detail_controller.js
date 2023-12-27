import * as entranceDetailServices from "../services/entrance_detail.service.js"

//Get EntranceDetails Method
export const getEntranceDetails = (req, res) => {
    entranceDetailServices.getEntranceDetails()
        .then((result) => {
            res.status(200).json({
                message: "EntranceDetails retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get EntranceDetail Method
export const getEntranceDetail = (req, res) => {
    const { id_entrances, id_products } = req.params;
    entranceDetailServices.getEntranceDetail(id_entrances, id_products)
    .then((result) => {
        res.status(200).json({
            message: "EntranceDetail retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create EntranceDetail Method
export const createEntranceDetail = (req, res) => {
    const entranceDetail = req.body;
    entranceDetailServices.createEntranceDetail(entranceDetail)
        .then(() => {
            res.status(200).json({
                message: "EntranceDetail created successfully",
                data: entranceDetail,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update EntranceDetail Method
export const updateEntranceDetail = (req, res) => {
    const { id_entrances, id_products } = req.params;
    const entranceDetail = req.body;
    entranceDetailServices.updateEntranceDetail(id_entrances, id_products, entranceDetail)
        .then(() => {
            res.status(200).json({
                message: "EntranceDetail updated successfully",
                data: entranceDetail,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete EntranceDetail Method
export const deleteEntranceDetail = (req, res) => {
    const { id_entrances, id_products } = req.params;
    entranceDetailServices.deleteEntranceDetail(id_entrances, id_products)
        .then(() => {
            res.status(200).json({
                message: "EntranceDetail deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};