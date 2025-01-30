import * as billDetailServices from "../services/bill_detail.service.js"

//Get BillDetails Method
export const getBillDetails = (req, res) => {
    billDetailServices.getBillDetails()
        .then((result) => {
            res.status(200).json({
                message: "Bill Details retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get BillDetail Method
export const getBillDetail = (req, res) => {
    const { id } = req.params;
    billDetailServices.getBillDetail(id)
    .then((result) => {
        res.status(200).json({
            message: "Bill Detail retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create BillDetail Method
export const createBillDetail = (req, res) => {
    const billDetail = req.body;
    billDetailServices.createBillDetail(billDetail)
        .then(() => {
            res.status(200).json({
                message: "Bill Detail created successfully",
                data: billDetail,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update BillDetail Method
export const updateBillDetail = (req, res) => {
    const { id } = req.params;
    const billDetail = req.body;
    billDetailServices.updateBillDetail(id, billDetail)
        .then(() => {
            res.status(200).json({
                message: "Bill Detail updated successfully",
                data: billDetail,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete BillDetail Method
export const deleteBillDetail = (req, res) => {
    const { id } = req.params;
    billDetailServices.deleteBillDetail(id)
        .then(() => {
            res.status(200).json({
                message: "Bill Detail deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};