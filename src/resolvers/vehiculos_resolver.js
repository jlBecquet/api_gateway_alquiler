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
        nuevoVehiculo: (_, {vehiculo}, {dataSources}) => {
            return dataSources.vehiculosAPI.createNewVehiculo(vehiculo);
        },

        actualizarVehiculo: (_, {vehiculoId, vehiculoInput}, {dataSources}) => {
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
        },

        eliminarVehiculo: (_, {vehiculoId}, {dataSources}) => {
            return dataSources.vehiculosAPI.deleteVehiculo(vehiculoId);
        }
    }
};

module.exports = vehiculosResolver;