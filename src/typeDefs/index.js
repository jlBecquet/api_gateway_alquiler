//Se llama al typedef (esquema) de cada submodulo


const authTypeDefs = require('./auth_type_defs');
const vehiculosTypeDefs = require('./vehiculos_type_defs');
const alquilerTypeDefs = require('./alquiler_type_defs');
//Se unen
const schemasArrays = [authTypeDefs, vehiculosTypeDefs, alquilerTypeDefs];

//Se exportan
module.exports = schemasArrays;