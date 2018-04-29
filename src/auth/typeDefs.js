export const authTypeDef = `
    type Auth {
        email: String!
        password: String!
        
    }
    input AuthInput {
        email: String!
        password: String!
    }
`;

export const authMutations = `
    auth(auth: AuthInput!): Auth!
`;
