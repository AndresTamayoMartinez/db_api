import * as presentationServices from "../services/presentation.service.js"

//Get Presentations Method
export const getPresentations = (req, res) => {
    presentationServices.getPresentations()
        .then((result) => {
            res.status(200).json({
                message: "Presentations retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Presentation Method
export const getPresentation = (req, res) => {
    const { id } = req.params;
    presentationServices.getPresentation(id)
    .then((result) => {
        res.status(200).json({
            message: "Presentation retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Presentation Method
export const createPresentation = (req, res) => {
    const presentation = req.body;
    presentationServices.createPresentation(presentation)
        .then(() => {
            res.status(200).json({
                message: "Presentation created successfully",
                data: presentation,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Presentation Method
export const updatePresentation = (req, res) => {
    const { id } = req.params;
    const presentation = req.body;
    presentationServices.updatePresentation(id, presentation)
        .then(() => {
            res.status(200).json({
                message: "Presentation updated successfully",
                data: presentation,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Presentation Method
export const deletePresentation = (req, res) => {
    const { id } = req.params;
    presentationServices.deletePresentation(id)
        .then(() => {
            res.status(200).json({
                message: "Presentation deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};