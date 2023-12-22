import db from "../config/db.js";

//Get SaleDetails Method
export const getSaleDetails = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM detalle_venta";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get SaleDetail Method
export const getSaleDetail = (id_sales, id_products) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM detalle_venta WHERE id_venta = ? and id_producto = ?";
        db.execute(query, [id_sales, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create SaleDetail Method
export const createSaleDetail = (saleDetail) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO detalle_venta (id_venta, id_producto, id_presentacion, cantidad, precio, subtotal, abono, total) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        const {id_sale, id_product, id_presentation, amount, price, subtotal} = saleDetail;
        db.execute(query, [id_sale, id_product, id_presentation, amount, price, subtotal])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update SaleDetail Method
export const updateSaleDetail = (id_sales, id_products, saleDetail) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE detalle_venta SET id_producto = ?, id_presentacion = ?, cantidad = ?, precio = ?, subtotal = ? WHERE id_venta = ? and id_producto = ?";
        const {id_product, id_presentation, amount, price, subtotal} = saleDetail;
        db.execute(query, [id_product, id_presentation, amount, price, subtotal, id_sales, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete SaleDetail Method
export const deleteSaleDetail = (id_sales, id_products) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM detalle_venta WHERE id_venta = ? and id_producto = ?";
        db.execute(query, [id_sales, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};