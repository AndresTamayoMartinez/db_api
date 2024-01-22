import db from "../config/db.js";

//Get Presentations Method
export const getPresentations = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM presentacion";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Presentation Method
export const getPresentation = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM presentacion WHERE id_categoria = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Presentation Method
export const createPresentation = (presentation) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO presentacion (nombre, id_categoria) VALUES (?, ?)";
        const {name, id_category} = presentation;
        db.execute(query, [name, id_category])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Presentation Method
export const updatePresentation = (id, presentation) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE presentacion SET nombre = ?, id_categoria = ? WHERE id = ?";
        const {name, id_category} = presentation;
        db.execute(query, [name, id_category, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Presentation Method
export const deletePresentation = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM presentacion WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};