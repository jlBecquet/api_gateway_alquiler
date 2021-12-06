const { RESTDataSource } = require('apollo-datasource-rest');

// Importacion de las urls de los microservicios
const serverConfig = require('../server');

// clase DataSource de usuarios 
class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    // metodo que se comunica con el mircoservico usurios y por medio de un POST se crea usuario  
    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }

    // metodo GET para recuperar un usurio por medio del id
    async getUser(userId) {
        return await this.get(`/user/${userId}/`);
    }
    
    // metodo que permite hacer login de usurio 
    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }
    
    // metodo POST para actulizar un token access con un token refresh
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }

}

module.exports = AuthAPI;
