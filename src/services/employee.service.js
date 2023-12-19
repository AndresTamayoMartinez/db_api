import db from "../config/db.js";

//Get Employees Method
export const getEmployees = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM empleado";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Employee Method
export const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM empleado WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Employee Method
export const createEmployee = (employee) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO empleado (nombre, telefono, puesto, usuario, contrasena) VALUES (?, ?, ?, ?, ?)";
        const {name, phone, position, user, password} = employee;
        db.execute(query, [name, phone, position, user, password])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Employee Method
export const updateEmployee = (id, employee) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE empleado SET nombre = ?, telefono = ?, puesto = ?, usuario = ?, contrasena = ? WHERE id = ?";
        const {name, phone, position, user, password} = employee;
        db.execute(query, [name, phone, position, user, password, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Employee Method
export const deleteEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM empleado WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};