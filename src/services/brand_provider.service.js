import db from "../config/db.js";

//Get BrandProvider Method
export const getBrandProviders = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM marca_proveedor";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get BranProvider Method
export const getBrandProvider = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM marca_proveedor WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create BrandProvider Method
export const createBrandProvider = (brandProvider) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO marca_proveedor (id_marca, id_proveedor) VALUES (?, ?)";
        const {id_brand, id_provider} = brandProvider;
        db.execute(query, [id_brand, id_provider])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update BrandProvider Method
export const updateBrandProvider = (id, brandProvider) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE marca_proveedor SET id_marca = ?, id_proveedor = ? WHERE id = ?";
        const {id_brand, id_provider} = brandProvider;
        db.execute(query, [id_brand, id_provider, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete BrandProvider Method
export const deleteBrandProvider = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM marca_proveedor WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};