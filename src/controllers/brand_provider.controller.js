import * as brandProviderServices from "../services/brand_provider.service.js"

//Get BrandProviders Method
export const getBrandProviders = (req, res) => {
    brandProviderServices.getBrandProviders()
        .then((result) => {
            res.status(200).json({
                message: "BrandProviders retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get BrandProvider Method
export const getBrandProvider = (req, res) => {
    const { id } = req.params;
    brandProviderServices.getBrandProvider(id)
    .then((result) => {
        res.status(200).json({
            message: "BrandProvider retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create BrandProvider Method
export const createBrandProvider = (req, res) => {
    const brandProvider = req.body;
    brandProviderServices.createBrandProvider(brandProvider)
        .then(() => {
            res.status(200).json({
                message: "BrandProvider created successfully",
                data: brandProvider,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update BrandProvider Method
export const updateBrandProvider = (req, res) => {
    const { id } = req.params;
    const brandProvider = req.body;
    brandProviderServices.updateBrandProvider(id, brandProvider)
        .then(() => {
            res.status(200).json({
                message: "BrandProvider updated successfully",
                data: brandProvider,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete BrandProvider Method
export const deleteBrandProvider = (req, res) => {
    const { id } = req.params;
    brandProviderServices.deleteBrandProvider(id)
        .then(() => {
            res.status(200).json({
                message: "BrandProvider deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};