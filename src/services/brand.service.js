import db from "../config/db.js";

//Get Brand Method
export const getBrands = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM marca";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Brand Method
export const getBrand = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM marca WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Brand Method
export const createBrand = (brand) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO marca (nombre) VALUES (?)";
        const {name} = brand;
        db.execute(query, [name])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Brand Method
export const updateBrand = (id, brand) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE marca SET nombre = ? WHERE id = ?";
        const {name} = brand;
        db.execute(query, [name, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Brand Method
export const deleteBrand = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM marca WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};