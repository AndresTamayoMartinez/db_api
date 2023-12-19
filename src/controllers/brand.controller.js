import * as brandServices from "../services/brand.service.js"

//Get Brands Method
export const getBrands = (req, res) => {
    brandServices.getBrands()
        .then((result) => {
            res.status(200).json({
                message: "Brands retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Brand Method
export const getBrand = (req, res) => {
    const { id } = req.params;
    brandServices.getBrand(id)
    .then((result) => {
        res.status(200).json({
            message: "Brand retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Brand Method
export const createBrand = (req, res) => {
    const brand = req.body;
    brandServices.createBrand(brand)
        .then(() => {
            res.status(200).json({
                message: "Brand created successfully",
                data: brand,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Brand Method
export const updateBrand = (req, res) => {
    const { id } = req.params;
    const brand = req.body;
    brandServices.updateBrand(id, brand)
        .then(() => {
            res.status(200).json({
                message: "Brand updated successfully",
                data: brand,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Brand Method
export const deleteBrand = (req, res) => {
    const { id } = req.params;
    brandServices.deleteBrand(id)
        .then(() => {
            res.status(200).json({
                message: "Brand deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};