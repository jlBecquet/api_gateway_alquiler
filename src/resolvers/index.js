const authResolver = require('./auth_resolver');

const lodash = require('lodash');
const vehiculosResolver = require('./vehiculos_resolver');
const alquilerResolver = require('./alquiler_resolver');

const resolvers = lodash.merge(authResolver, vehiculosResolver, alquilerResolver);

module.exports = resolvers;