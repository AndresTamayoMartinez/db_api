import db from "../config/db.js";

//Get Sale by ID Method
export const getSale = (id) => {
    return new Promise((resolve, reject) => {
        const query = `select v.id, v.fecha, v.subtotal, v.abono, v.total, c.nombre as nombre_cliente, c.calle, c.colonia, c.ciudad, c.telefono, e.nombre as nombre_empleado
                        from venta as v
                        inner join cliente as c on c.id = v.id_cliente
                        inner join empleado as e on e.id = v.id_empleado
                        WHERE v.id = ?;`;
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};

//Get SaleDetails by ID Method
export const getSaleDetails = (id) => {
    return new Promise((resolve, reject) => {
        const query = `select dv.id, dv.cantidad, dv.precio, dv.subtotal, dv.entregado, p.nombre, pr.nomrbe
                        from detalle_v as dv
                        inner join producto as p on p.id = dv.id_producto
                        inner join presentacion as pr on pr.id = dv.id_presentacion
                        WHERE dv.id_venta = ?;`;
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
    });
};