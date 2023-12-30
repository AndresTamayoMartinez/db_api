import db from "../config/db.js";

//Get Employee Method
export const getEmployee = (username, password) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT id,nombre FROM empleado WHERE usuario = ? and contrasena = ?";
        db.execute(query, [username, password])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};