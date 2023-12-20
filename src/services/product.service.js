import db from "../config/db.js";

//Get Products Method
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM producto";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Product Method
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM producto WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Product Method
export const createProduct = (product) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO producto (nombre, descripcion, precio, cantidad, stock, id_categoria, id_presentacion, id_marca) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        const {name, description, price, volume, stock, id_category, id_presentation, id_brand} = product;
        db.execute(query, [name, description, price, volume, stock, id_category, id_presentation, id_brand])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Product Method
export const updateProduct = (id, product) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE producto SET nombre = ?, descripcion= ?, precio = ?, cantidad = ?, stock = ?, id_categoria = ?, id_presentacion = ?, id_marca = ? WHERE id = ?";
        const {name, description, price, volume, stock, id_category, id_presentation, id_brand} = product;
        db.execute(query, [name, description, price, volume, stock, id_category, id_presentation, id_brand, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Product Method
export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM producto WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};