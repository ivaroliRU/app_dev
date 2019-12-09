const url = 'http://api.biomynd.is/authenticate';

//update the authentication token
export const updateAuthentication = (password, username) => {
    return async dispatch => {
        data = await fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });

        console.log(data.json);
    };
};