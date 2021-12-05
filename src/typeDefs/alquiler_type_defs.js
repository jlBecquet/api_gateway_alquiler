const { gql } = require('apollo-server');

const alquilerTypeDefs = gql `
    type Alquiler {
        id: String!
        username: String!
        vehiculoId: String!
        vehiculoNombre: String
        fechaInicio: String!
        fechaFinal: String!
        lugarEntrega: String!
        lugarRegreso: String!
        entregado: Boolean! 
    }

    type AlquilerList {
        id: String!
        username: String!
        vehiculoId: String!
        vehiculoNombre: String
        fechaInicio: String!
        fechaFinal: String
        entregado: Boolean!
    }

    input AlquilerInput {
        id: String!
        username: String!
        vehiculoId: String!
        fechaInicio: String!
        fechaFinal: String!
        lugarEntrega: String!
        lugarRegreso: String!
        entregado: Boolean!
    }

    extend type Query {
        alquilerByUsername(username: String!): [Alquiler]
        alquilerById(alquilerId: String!): Alquiler
        alquilerList: [AlquilerList]
    }

    extend type Mutation {
        createAlquiler(alquiler: AlquilerInput!): Alquiler!
        actualizarAlquiler(alquilerId: String, alquilerInput: AlquilerInput!): Alquiler!
        eliminarAlquiler(alquilerId: String): Alquiler
    }
`;

module.exports = alquilerTypeDefs;