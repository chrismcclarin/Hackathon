import Account from '../models/account.js';

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

    response.send(account);
}