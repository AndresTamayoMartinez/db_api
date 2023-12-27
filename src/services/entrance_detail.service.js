import db from "../config/db.js";

//Get EntranceDetails Method
export const getEntranceDetails = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM detalle_ingreso";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get EntranceDetail Method
export const getEntranceDetail = (id_entrances, id_products) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM detalle_ingreso WHERE id_ingreso = ? and id_producto = ?";
        db.execute(query, [id_entrances, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create EntranceDetail Method
export const createEntranceDetail = (entranceDetail) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO detalle_ingreso (id_ingreso, id_producto, id_presentacion, cantidad, precio, subtotal) VALUES (?, ?, ?, ?, ?, ?)";
        const {id_entrance, id_product, id_presentation, amount, price, subtotal} = entranceDetail;
        db.execute(query, [id_entrance, id_product, id_presentation, amount, price, subtotal])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update EntranceDetail Method
export const updateEntranceDetail = (id_entrances, id_products, saleDetail) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE detalle_ingreso SET id_producto = ?, id_presentacion = ?, cantidad = ?, precio = ?, subtotal = ? WHERE id_ingreso = ? and id_producto = ?";
        const {id_product, id_presentation, amount, price, subtotal} = saleDetail;
        db.execute(query, [id_product, id_presentation, amount, price, subtotal, id_entrances, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete EntranceDetail Method
export const deleteEntranceDetail = (id_entrances, id_products) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM detalle_ingreso WHERE id_ingreso = ? and id_producto = ?";
        db.execute(query, [id_entrances, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};