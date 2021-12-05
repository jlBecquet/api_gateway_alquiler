const {RESTDataSource} = require('apollo-datasource-rest');

const serverConfig = require('../server');

class VehiculosAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.vehiculos_api_url;
    }

    async getVehiculos(VehiculosList) {
        return await this.get(`vehiculos`, VehiculosList);
    }

    async getVehiculoById(vehiculoId) {
        return await this.get(`vehiculos/${vehiculoId}`);
    }

    async getVehiculosByCategoria(vehiculoCategoria) {
        return await this.get(`categoriaVehiculo/${vehiculoCategoria}`);
    }

    async createNewVehiculo(vehiculo) {
        vehiculo = new Object(JSON.parse(JSON.stringify(vehiculo)));
        return await this.post(`nuevoVehiculo`, vehiculo);
    }

    async updateVehiculo(vehiculoId, vehiculoInput) {
        vehiculoInput = new Object(JSON.parse(JSON.stringify(vehiculoInput)));
        return await this.put(`actualizarVehiculo/${vehiculoId}`, vehiculoInput);
    }

    async deleteVehiculo(vehiculoId) {
        return await this.delete(`eliminarVehiculo/${vehiculoId}`);
    }

    async createAlquiler(alquiler) {
        alquiler = new Object(JSON.parse(JSON.stringify(alquiler)));
        return await this.post(`alquilar`, alquiler);
    }

    async getAlquilerByUsername(username) {
        return await this.get(`alquilerUsuario/${username}`);
    }

    async getAlquilerById(alquilerId) {
        return await this.get(`alquiler/${alquilerId}`);
    }

    async getAlquilerList(alquilerList) {
        return await this.get(`alquiler`, alquilerList);
    }

    async updateAlquiler(alquilerId, alquilerInput) {
        alquilerInput = new Object(JSON.parse(JSON.stringify(alquilerInput)));
        return await this.put(`alquilerActualizar/${alquilerId}`, alquilerInput);
    }

    async deleteAlquiler(alquilerId) {
        return await this.delete(`alquilerEliminar/${alquilerId}`);
    }
}

module.exports = VehiculosAPI;