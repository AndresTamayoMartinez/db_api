import * as entranceServices from "../services/entrance.service.js"

//Get Entrances Method
export const getEntrances = (req, res) => {
    entranceServices.getEntrances()
        .then((result) => {
            res.status(200).json({
                message: "Entrances retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Entrance Method
export const getEntrance = (req, res) => {
    const { id } = req.params;
    entranceServices.getEntrance(id)
    .then((result) => {
        res.status(200).json({
            message: "Entrance retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create entrance Method
export const createEntrance = (req, res) => {
    const entrance = req.body;
    entranceServices.createEntrance(entrance)
        .then(() => {
            res.status(200).json({
                message: "Entrance created successfully",
                data: entrance,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Entrance Method
export const updateEntrance = (req, res) => {
    const { id } = req.params;
    const entrance = req.body;
    entranceServices.updateEntrance(id, entrance)
        .then(() => {
            res.status(200).json({
                message: "Entrance updated successfully",
                data: entrance,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Entrance Method
export const deleteEntrance = (req, res) => {
    const { id } = req.params;
    entranceServices.deleteEntrance(id)
        .then(() => {
            res.status(200).json({
                message: "Entrance deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};