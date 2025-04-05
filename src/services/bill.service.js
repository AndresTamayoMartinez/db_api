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

//Get Bill Method
export const getBill = (id) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT 
                COALESCE(cf.rfc, cf_pg.rfc) AS rfc,
                IF(cf.id_cliente IS NULL, 'PUBLICO EN GENERAL', c.nombre) AS nombre,
                COALESCE(cf.uso_cfdi, cf_pg.uso_cfdi) AS uso_cfdi,
                COALESCE(cf.regimen_fiscal, cf_pg.regimen_fiscal) AS regimen_fiscal,
                COALESCE(cf.codigo_postal, cf_pg.codigo_postal) AS codigo_postal
            FROM venta AS v
            JOIN cliente AS c ON v.id_cliente = c.id
            LEFT JOIN cliente_fiscal AS cf ON cf.id_cliente = c.id
            LEFT JOIN cliente_fiscal AS cf_pg ON cf_pg.id_cliente = 71
            WHERE v.id = ?;
        `;
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