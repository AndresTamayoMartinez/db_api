import db from "../config/db.js";

//Get SaleDetails Method
export const getSaleDetails = (id_sale) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT dv.id_producto, p.nombre as nombre_producto, pr.nomrbe as nombre_presentacion, dv.cantidad, dv.precio, dv.subtotal, dv.entregado 
                        FROM detalle_v as dv
                        inner join producto as p on p.id = dv.id_producto
                        inner join presentacion as pr on pr.id = dv.id_presentacion
                        where id_venta = ?`;        
        db.execute(query, [id_sale])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get SaleDetail Method
export const getSaleDetail = (id_sales, id_products) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM detalle_v WHERE id_venta = ? and id_producto = ?";
        db.execute(query, [id_sales, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create SaleDetail Method
export const createSaleDetail = (saleDetail) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO detalle_v (id_venta, id_producto, id_presentacion, cantidad, precio, subtotal, entregado) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const {id_sale, id_product, id_presentation, amount, price, subtotal, delivered} = saleDetail;
        // const values = saleDetail.map(saleProduct => {
        //     const {id_sale, id_product, id_presentation, amount, price, subtotal, delivered} = saleProduct;
        //     return [id_sale, id_product, id_presentation, amount, price, subtotal, delivered];
        // });
        db.execute(query, [id_sale, id_product, id_presentation, amount, price, subtotal, delivered])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update SaleDetail Method
export const updateSaleDetail = (id_sales, id_products, saleDetail) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE detalle_v SET id_producto = ?, id_presentacion = ?, cantidad = ?, precio = ?, subtotal = ?, entregado = ? WHERE id_venta = ? and id_producto = ?";
        const {id_product, id_presentation, amount, price, subtotal, delivered} = saleDetail;
        db.execute(query, [id_product, id_presentation, amount, price, subtotal, delivered, id_sales, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete SaleDetail Method
export const deleteSaleDetail = (id_sales, id_products) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM detalle_v WHERE id_venta = ? and id_producto = ?";
        db.execute(query, [id_sales, id_products])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};