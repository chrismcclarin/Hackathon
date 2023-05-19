import Account from '../models/account.js';

import JWT from 'jsonwebtoken';

export const login = (request, response) => {

}

export const logout = (request, response) => {
    
}

export const signup = async (request, response) => {

    const newAccount = {
        credentials: {
            username: 'test',
            password: 'boom'
        }
    }

    const account = await Account.create(new Account(newAccount));

    if (account) {

        const TOKEN = JWT.sign(
            {
                username: account.credentials.username
            },
            "gengarisbestpokemon",
            {
                expiresIn: '1h'
            }
        );

        response.json({
            data: {
                token: TOKEN
            }
        });
    }
}