const { gql } = require('apollo-server');

const vehiculosTypeDefs = gql `
    type Vehiculo {
        id: String
        nombre: String
        placa: String
        marca: String
        modelo: String
        color: String
        cilindraje: String
        fullEquipo: Boolean
        image_URL: String
        transmision: String
        categoria: String
        tarifa: Float
        disponible: Boolean
    }

    input VehiculoInput {
        id: String!
        nombre: String!
        placa: String!
        marca: String!
        modelo: String!
        color: String!
        cilindraje: String!
        fullEquipo: Boolean!
        image_URL: String!
        transmision: String!
        categoria: String!
        tarifa: Float!
        disponible: Boolean!
    }

    type VehiculosList {
        id: String!
        nombre: String!
        marca: String!
        image_URL: String!
        categoria: String!
        disponible: Boolean!
    }

    type Query {
        vehiculos: [VehiculosList!]!
        vehiculoById(vehiculoId: String!): Vehiculo!
        vehiculosByCategoria(vehiculoCategoria: String!): [Vehiculo!]!
    }

    type Mutation {
        nuevoVehiculo(vehiculo: VehiculoInput!): Vehiculo!
        actualizarVehiculo(vehiculoId: String, vehiculoInput: VehiculoInput!): Vehiculo!
        eliminarVehiculo(vehiculoId: String): Vehiculo
    }
`;

module.exports = vehiculosTypeDefs;