const alquilerResolver = {
    Query: {
        alquilerByUsername: async(_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.vehiculosAPI.getAlquilerByUsername(username);
            else
                return null
        },

        alquilerById: async(_, {alquilerId}, {dataSources, userIdToken}) => {
            userIsStaff = (await dataSources.authAPI.getUser(userIdToken)).is_staff
            if (userIsStaff == true)
                return dataSources.vehiculosAPI.getAlquilerById(alquilerId);  
            else 
                return null
        },

        alquilerList: async(_, {alquilerList}, {dataSources, userIdToken}) => {
            userIsStaff = (await dataSources.authAPI.getUser(userIdToken)).is_staff
            if (userIsStaff == true)
                return dataSources.vehiculosAPI.getAlquilerList(alquilerList)
            else 
                return null
        }
    },

    Mutation: {
        createAlquiler: async(_, {alquiler}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
                if (alquiler.username == usernameToken)
                    return dataSources.vehiculosAPI.createAlquiler(alquiler)
                else 
                    return null
        },

        actualizarAlquiler: async(_, {alquilerId, alquilerInput}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (alquilerInput.username == usernameToken){
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
            }
            else 
                return null
        },

        eliminarAlquiler: async(_, {alquilerId}, {dataSources, userIdToken}) => {
            userIsStaff = (await dataSources.authAPI.getUser(userIdToken)).is_staff
            if (userIsStaff == true)
                return dataSources.vehiculosAPI.deleteAlquiler(alquilerId);
            else
                return null;
        }
    }
}

module.exports = alquilerResolver;