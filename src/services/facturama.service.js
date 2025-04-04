import fetch from 'node-fetch';

const FACTURAMA_API_URL = 'https://api.facturama.mx';
const AUTH_HEADER = 'Basic Q2FybG9zRGFuaWVsVGFtYXlvOk1hcnRpbmV6NTY=';

const getRequest = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'authorization': AUTH_HEADER,
    },
    redirect: "follow"
}

//Get Payments Forms Method from Facturama
export const getPaymentsForms = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${FACTURAMA_API_URL}/Catalogs/PaymentForms`, getRequest)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en Facturama: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
};

//Get Fiscal Regimens Method from Facturama
export const getFiscalRegimens = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${FACTURAMA_API_URL}/Catalogs/FiscalRegimens`, getRequest)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en Facturama: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
};

//Get Cfdi Uses Method from Facturama
export const getCfdiUses = async () => {
    return new Promise((resolve, reject) => {
        fetch(`${FACTURAMA_API_URL}/Catalogs/CfdiUses`, getRequest)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en Facturama: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
};

