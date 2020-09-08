export const TOKEN_KEY = 'access-token';

export const CLIENT = 'client';

export const UID ='uid';

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const getClient = () => sessionStorage.getItem(CLIENT);

export const getUid = () => sessionStorage.getItem(UID);

export const login = (token, client, uid)  => {

    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(CLIENT, client);
    sessionStorage.setItem(UID, uid)

  };

export const logout = ( )  => {

    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(CLIENT);
    sessionStorage.removeItem(UID)

  };

export const config = {
    headers: {
      'access-token': getToken(),
      'client': getClient(),
      'uid': getUid()
    }
};