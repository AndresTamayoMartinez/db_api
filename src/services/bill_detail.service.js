import db from "../config/db.js";

//Get Bill_Details Method
export const getBillDetails = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM detalle_factura";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get BillDetail Method
export const getBillDetail = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM detalle_factura WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create BillDetail Method
export const createBillDetail = (billDetail) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO detalle_factura (nombre, telefono, puesto, usuario, contrasena) VALUES (?, ?, ?, ?, ?)";
        const {name, phone, position, user, password} = billDetail;
        db.execute(query, [name, phone, position, user, password])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update BillDetail Method
export const updateBillDetail = (id, billDetail) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE detalle_factura SET nombre = ?, telefono = ?, puesto = ?, usuario = ?, contrasena = ? WHERE id = ?";
        const {name, phone, position, user, password} = billDetail;
        db.execute(query, [name, phone, position, user, password, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete BillDetail Method
export const deleteBillDetail = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM detalle_factura WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};