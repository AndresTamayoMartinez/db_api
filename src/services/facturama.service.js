import fetch from 'node-fetch';

const FACTURAMA_API_URL = 'https://apisandbox.facturama.mx';
const AUTH_HEADER = 'Basic Q2FybG9zRGFuaWVsVGFtYXlvOk1hcnRpbmV6NTY=';

const getRequest = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'authorization': 'Basic Q2FybG9zRGFuaWVsdGFtYXlvOk1vcmFsZXM1Ng=='
    },
    redirect: "follow"
}

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