import db from "../config/db.js";

//Get Entrances Method
export const getEntrances = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM ingreso";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Entrance Method
export const getEntrance = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM ingreso WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Entrance Method
export const createEntrance = (entrance) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO ingreso (fecha, id_proveedor, id_empleado) VALUES (?, ?, ?)";
        const {date, id_provider, id_employee} = entrance;
        db.execute(query, [date, id_provider, id_employee])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Entrances Method
export const updateEntrance = (id, entrance) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE ingreso SET fecha = ?, id_proveedor = ?, id_empleado = ? WHERE id = ?";
        const {date, id_provider, id_employee} = entrance;
        db.execute(query, [date, id_provider, id_employee, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Entrnace Method
export const deleteEntrance = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM ingreso WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};