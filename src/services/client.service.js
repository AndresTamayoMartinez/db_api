import db from "../config/db.js";

//Get Clients Method
export const getClients = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM cliente";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Client Method
export const getClient = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM cliente WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Client Method
export const createClient = (client) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO cliente (nombre, calle, colonia, ciudad, telefono) VALUES (?, ?, ?, ?, ?)";
        const {name, street, colony, city, phone} = client;
        db.execute(query, [name, street, colony, city, phone])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Client Method
export const updateClient = (id, client) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE cliente SET nombre = ?, calle = ?, colonia = ?, ciudad = ?, telefono = ? WHERE id = ?";
        const {name, street, colony, city, phone} = client;
        db.execute(query, [name, street, colony, city, phone, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Client Method
export const deleteClient = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM cliente WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};