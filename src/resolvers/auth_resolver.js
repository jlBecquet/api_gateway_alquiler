const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            // console.log(dataSources);
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null;
        },
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            
            const authInput = {
                username: userInput.username,
                password: userInput.password,
                nombres: userInput.nombres,
                apellidos: userInput.apellidos,
                email: userInput.email,
                tipo_documento: userInput.tipo_documento,
                documento: userInput.documento,
                fecha_nto: userInput.fecha_nto,
                telefono: userInput.telefono,
                lic_cond: userInput.lic_cond,
                exped_lic: userInput.exped_lic
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: (_, { credentials }, { dataSources }) => 
            dataSources.authAPI.authRequest(credentials),

        refreshToken: (_, { refresh }, { dataSources }) => 
            dataSources.authAPI.refreshToken(refresh),
    }
};

module.exports = usersResolver;