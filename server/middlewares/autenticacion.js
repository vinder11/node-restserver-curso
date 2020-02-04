const jwt = require('jsonwebtoken');
/////////////////
// Verificar token
/////////////////
let verificaToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoced) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoced.usuario;
        console.log(decoced);
        next();
    });
    //res.json({
    //  token
    //});
};

/////////////////
// Verificar adminRole
/////////////////
let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es Administrador'
            }
        });
    }

};

//////////////////////////////
// Verificar token para imagen
/////////////////////////////
let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoced) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoced.usuario;
        console.log(decoced);
        next();
    });
}


module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}