const vehiculosResolver = {
    Query: {
        vehiculos: (_,{vehiculosList}, {dataSources}) => {
            return dataSources.vehiculosAPI.getVehiculos(vehiculosList);
        },

        vehiculoById: (_, {vehiculoId}, {dataSources}) => {
            return dataSources.vehiculosAPI.getVehiculoById(vehiculoId);
        },

        vehiculosByCategoria: (_, {vehiculoCategoria}, {dataSources}) => {
            return dataSources.vehiculosAPI.getVehiculosByCategoria(vehiculoCategoria);
        }

    },

    Mutation: {
        nuevoVehiculo: async(_, {vehiculo}, {dataSources, userIdToken}) => {
            userIsStaff = (await dataSources.authAPI.getUser(userIdToken)).is_staff
            if (userIsStaff == true)
                return dataSources.vehiculosAPI.createNewVehiculo(vehiculo);
            else
                return null;
        }, 

        actualizarVehiculo: async(_, {vehiculoId, vehiculoInput}, {dataSources, userIdToken}) => {
            userIsStaff = (await dataSources.authAPI.getUser(userIdToken)).is_staff
            if (userIsStaff == true) {
                const vehiculoActInput = {
                    id: vehiculoInput.id,
                    nombre: vehiculoInput.nombre,
                    placa: vehiculoInput.placa,
                    marca: vehiculoInput.marca,
                    modelo: vehiculoInput.modelo,
                    color: vehiculoInput.color,
                    cilindraje: vehiculoInput.cilindraje,
                    fullEquipo: vehiculoInput.fullEquipo,
                    image_URL: vehiculoInput.image_URL,
                    transmision: vehiculoInput.transmision,
                    categoria: vehiculoInput.categoria,
                    tarifa: vehiculoInput.tarifa,
                    disponible: vehiculoInput.disponible
                }
                return dataSources.vehiculosAPI.updateVehiculo(vehiculoId, vehiculoActInput);
            } else 
                return null;
        },

        eliminarVehiculo: async(_, {vehiculoId}, {dataSources, userIdToken}) => {
            userIsStaff = (await dataSources.authAPI.getUser(userIdToken)).is_staff
            if (userIsStaff == true)
                return dataSources.vehiculosAPI.deleteVehiculo(vehiculoId);
            else 
                return null;
        }
    }
};

module.exports = vehiculosResolver;