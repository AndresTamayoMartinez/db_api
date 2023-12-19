import db from "../config/db.js";

//Get Providers Method
export const getProviders = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM proveedor";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Provider Method
export const getProvider = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM proveedor WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Provider Method
export const createProvider = (provider) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO proveedor (razon_social, nombre, telefono) VALUES (?, ?, ?)";
        const {business, name, phone} = provider;
        db.execute(query, [business, name, phone])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export const updateProvider = (id, provider) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE proveedor SET razon_social = ?, nombre = ?, phone = ? WHERE id = ?";
        const {business, name, phone} = provider;
        db.execute(query, [business, name, phone, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

export const deleteProvider = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM provider WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};