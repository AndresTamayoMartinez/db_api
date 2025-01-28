import * as billServices from "../services/bill.service.js"

//Get Bills Method
export const getBills = (req, res) => {
    billServices.getBills()
        .then((result) => {
            res.status(200).json({
                message: "Bills retrieved successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Bill Method
export const getBill = (req, res) => {
    const { id } = req.params;
    billServices.getBill(id)
    .then((result) => {
        res.status(200).json({
            message: "Bill retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Bill Method
export const createBill = (req, res) => {
    const bill = req.body;
    billServices.createBill(bill)
        .then(() => {
            res.status(200).json({
                message: "Bill created successfully",
                data: bill,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};