const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        nombres: String!
        apellidos: String!
        email: String!
        tipo_documento: String!
        documento: Int!
        fecha_nto: String!
        telefono: Int!
        lic_cond: Int!
        exped_lic: String!
    }

    

    type UserDetail {
        username: String!
        password: String!
        nombres: String!
        apellidos: String!
        email: String!
        tipo_documento: String!
        documento: Int!
        fecha_nto: String!
        telefono: Int!
        lic_cond: Int!
        exped_lic: String!
    }

    
    
    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens! 
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;

module.exports = authTypeDefs;