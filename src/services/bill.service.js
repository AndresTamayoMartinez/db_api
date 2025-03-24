import db from "../config/db.js";

//Get Bills Method
export const getBills = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM factura";
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get Employee Method
export const getBill = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT cf.rfc, c.nombre, cf.uso_cfdi FROM venta as v JOIN cliente as c on v.id_cliente = c.id JOIN cliente_fiscal as cf on cf.id_cliente = c.id WHERE v.id = ?";
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Create Bill Method
export const createEmployee = (bill) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO factura (id_venta, id_cliente_fiscal, id_metodo_pago, id_pac, uuid, serie, folio, fecha, subtotal, impuestos, total, xml, pdf, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const {idSale, idFiscalClient, idPaidMethod, idPac, uuid, serie, folio, subtotal, taxes, total, xml, pdf, billState} = bill;
        db.execute(query, [idSale, idFiscalClient, idPaidMethod, idPac, uuid, serie, folio, subtotal, taxes, total, xml, pdf, billState])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};