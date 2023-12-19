import * as categoryServices from "../services/category.service.js"

//Get Categories Method
export const getCategories = (req, res) => {
    categoryServices.getCategories()
        .then((result) => {
            res.status(200).json({
                message: "Categories retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Category Method
export const getCategory = (req, res) => {
    const { id } = req.params;
    categoryServices.getCategory(id)
    .then((result) => {
        res.status(200).json({
            message: "Category retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Category Method
export const createCategory = (req, res) => {
    const category = req.body;
    categoryServices.createCategory(category)
        .then(() => {
            res.status(200).json({
                message: "Category created successfully",
                data: category,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Category Method
export const updateCategory = (req, res) => {
    const { id } = req.params;
    const category = req.body;
    categoryServices.updateCategory(id, category)
        .then(() => {
            res.status(200).json({
                message: "Category updated successfully",
                data: category,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Category Method
export const deleteCategory = (req, res) => {
    const { id } = req.params;
    categoryServices.deleteCategory(id)
        .then(() => {
            res.status(200).json({
                message: "Category deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};