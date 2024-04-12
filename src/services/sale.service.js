import db from "../config/db.js";

//Get Sales Method
export const getSales = () => {
    return new Promise((resolve, reject) => {
        const query = `select v.id, v.fecha, c.nombre as nombre_cliente, e.nombre as nombre_empleado, v.pagado, v.entregado, v.subtotal, v.abono, v.total
                        from venta as v
                        inner join cliente as c on c.id = v.id_cliente
                        inner join empleado as e on e.id = v.id_empleado;`;
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Sale by ID Method
export const getSale = (id) => {
    return new Promise((resolve, reject) => {
        const query = `select v.id as id, v.fecha as fecha, c.id as id_cliente, e.id as id_empleado, v.pagado as pagado, v.entregado as entregado, v.subtotal as subtotal, v.abono as abono, v.total as total
                        from venta as v
                        inner join cliente as c on c.id = v.id_cliente
                        inner join empleado as e on e.id = v.id_empleado
                        WHERE v.id = ?;`;
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Sale Method
export const createSale = (sale) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO venta (fecha, pagado, entregado, id_cliente, id_empleado, subtotal, abono, total) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        const {date, paid, delivered, id_client, id_employee, subtotal, abono, total} = sale;
        db.execute(query, [date, paid, delivered, id_client, id_employee, subtotal, abono, total])
            .then((result) => {
                const insertedId = result[0].insertId;
                resolve(insertedId);
            })
            .catch((err) => reject(err));
    });
};

//Update Sale Method
export const updateSale = (id, sale) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE venta SET fecha = ?, pagado = ?, entregado = ?, id_cliente = ?, id_empleado = ?, subtotal = ?, abono = ?, total = ? WHERE id = ?";
        const {date, paid, delivered, id_client, id_employee, subtotal, abono, total} = sale;
        db.execute(query, [date, paid, delivered, id_client, id_employee, subtotal, abono, total, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Sale-Subtotal Method
export const updateSaleSubtotal = (id, sale) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE venta SET subtotal = ?, abono = ?, total = ? WHERE id = ?";
        const {subtotal, abono, total} = sale;
        db.execute(query, [subtotal, abono, total, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Sale Method
export const deleteSale = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM venta WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Sale Method
export const deleteSalesDetails = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM detalle_v WHERE id_venta = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};