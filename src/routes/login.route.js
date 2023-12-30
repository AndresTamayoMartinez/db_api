import { Router } from "express";
import jsonwebtoken from "jsonwebtoken";
import * as employeeServices from "../services/login.service.js"
 
const jwt = jsonwebtoken;
const loginRouter = Router()

loginRouter.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <tittle>Login</tittle>
            </head>
            <body>
                <form method="POST" action="/login/auth">
                    <p>Nombre de usuario</P>
                    <input type="text" name="username">
                    <p>Contraseña</P>
                    <input type:"password" name="password">
                    <input type="submit" value="Iniciar Sesion">
                </form>
            </body>
        </html>
    `)
});

loginRouter.post('/auth', (req, res) => {
    const {username, password} = req.body;
    employeeServices.getEmployee(username, password)
    .then((result) => {
        if(result[0][0] != null){
            const {id, nombre} = result[0][0]
            const user = {id: id, name: nombre, username};
            const accessToken = generateAccessToken(user);
            res.header('authorization', accessToken).json({
                    message: 'Usuario autentificado',
                    token: accessToken,
                    data: result[0]
            });
        } else(
            res.status(200).json({
                message: "Usuario o contraseña incorrectos"
            })
        )
    }).catch((err) => {
        res.status(500).send(err)
    });
});

export function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRET, {expiresIn: '13h'});
}

export function validateToken(req, res, next){
    const accessToken = req.headers['authorization'] || req.query.accesstoken;
    if(!accessToken) res.send('Access Denied');

    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if(err){
            res.send('Access Denied, token expired or incorret');
        } else{
            next();
        }
    });
}

export default loginRouter;