const fetch = require('node-fetch');

const FACTURAMA_API_URL = 'https://apisandbox.facturama.mx/';
const AUTH_HEADER = 'Basic Q2FybG9zRGFuaWVsVGFtYXlvOk1hcnRpbmV6NTY=';

export const getPaymentsForms = async () => {
    try{
        const response = await fetch(FACTURAMA_API_URL + 'Catalogs/PaymentForms', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_HEADER
            }
        });

        if (!response.ok) {
            throw new Error(`Error en Facturama: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error obteniendo las formas de pago:', error.message);
        throw error;
    }
};