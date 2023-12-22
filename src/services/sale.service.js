import db from "../config/db.js";

//Get Sales Method
export const getSales = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM venta";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Sale Method
export const getSale = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM venta WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Sale Method
export const createSale = (sale) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO venta (fecha, pagado, entregado, id_cliente, id_empleado) VALUES (?, ?, ?, ?, ?)";
        const {date, paid, delivered, id_client, id_employee} = sale;
        db.execute(query, [date, paid, delivered, id_client, id_employee])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Sale Method
export const updateSale = (id, sale) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE venta SET fecha = ?, pagado = ?, entregado = ?, id_cliente = ?, id_empleado = ? WHERE id = ?";
        const {date, paid, delivered, id_client, id_employee} = sale;
        db.execute(query, [date, paid, delivered, id_client, id_employee, id])
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