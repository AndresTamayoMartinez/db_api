import db from "../config/db.js";

//Get Fiscal Clients Method
export const getFiscalClients = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM cliente_fiscal";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Fiscal Client Method
export const getFiscalClient = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM cliente_fiscal WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Fiscal Client Method
export const createFiscalClient = (fiscalClient) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO cliente_fiscal (id_cliente, rfc, regimen_fiscal, codigo_postal, uso_cfdi) VALUES (?, ?, ?, ?, ?)";
        const {idClient, rfc, fiscalRegimen, postalCode, cfdiUse} = fiscalClient;
        db.execute(query, [idClient, rfc, fiscalRegimen, postalCode, cfdiUse])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Update Fiscal Client Method
export const updateFiscalClient = (id, fiscalClient) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE cliente_fiscal SET id_cliente = ?, rfc = ?, regimen_fiscal = ?, codigo_postal = ?, uso_cfdi = ? WHERE id = ?";
        const {idClient, rfc, fiscalRegimen, postalCode, cfdiUse} = fiscalClient;
        db.execute(query, [idClient, rfc, fiscalRegimen, postalCode, cfdiUse])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Delete Fiscal Client Method
export const deleteFiscalClient = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM cliente_fiscal WHERE id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};