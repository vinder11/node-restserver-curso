// ===========================
// Puerto
//============================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// Entorno
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================
// fecha de expiracion simiento del token
//============================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
// ===========================
// semilla de autenticacion
//============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
// ===========================
// Base Datos
//============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;

// ===========================
// Google Client ID
//============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '342251255386-rroi8c406fsd9abk4o18qkumcg7qvt06.apps.googleusercontent.com';