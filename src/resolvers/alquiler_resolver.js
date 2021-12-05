const alquilerResolver = {
    Query: {
        alquilerByUsername: (_, {username}, {dataSources}) => {
            return dataSources.vehiculosAPI.getAlquilerByUsername(username);
        },

        alquilerById: (_, {alquilerId}, {dataSources}) => {
            return dataSources.vehiculosAPI.getAlquilerById(alquilerId);
        },

        alquilerList: (_, {alquilerList}, {dataSources}) => {
            return dataSources.vehiculosAPI.getAlquilerList(alquilerList);
        }
    },

    Mutation: {
        createAlquiler: (_, {alquiler}, {dataSources}) => {
            return dataSources.vehiculosAPI.createAlquiler(alquiler);
        },

        actualizarAlquiler: (_, {alquilerId, alquilerInput}, {dataSources}) => {
            const alquilerActInput = {
                id: alquilerInput.id,
                username: alquilerInput.username,
                vehiculoId: alquilerInput.vehiculoId,
                fechaInicio: alquilerInput.fechaInicio,
                fechaFinal: alquilerInput.fechaFinal,
                lugarEntrega: alquilerInput.lugarEntrega,
                lugarRegreso: alquilerInput.lugarRegreso,
                entregado: alquilerInput.entregado
            }
            return dataSources.vehiculosAPI.updateAlquiler(alquilerId, alquilerActInput);
        },

        eliminarAlquiler: (_, {alquilerId}, {dataSources}) => {
            return dataSources.vehiculosAPI.deleteAlquiler(alquilerId);
        }
    }
}

module.exports = alquilerResolver;