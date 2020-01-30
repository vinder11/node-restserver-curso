// ===========================
// Puerto
//============================
process.env.PORT = process.env.PORT || 3000;

// ===========================
// Entorno
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================
// Base Datos
//============================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://dal_sali_sald:NVOG5iqCv9qJb8zh@cluster0-w6qd1.mongodb.net/test';
}

process.env.URLDB = urlDB;