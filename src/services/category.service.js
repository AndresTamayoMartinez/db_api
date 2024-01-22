import db from "../config/db.js";

//Get Categories Method
export const getCategories = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM categoria ORDER BY nombre ASC";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Category Method
export const getCategory = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM categoria WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Category Method
export const createCategory = (category) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO categoria (nombre) VALUES (?)";
        const {name} = category;
        db.execute(query, [name])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Category Method
export const updateCategory = (id, category) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE categoria SET nombre = ? WHERE id = ?";
        const {name} = category;
        db.execute(query, [name, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Category Method
export const deleteCategory = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM categoria WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};