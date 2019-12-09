const url = 'http://api.kvikmyndir.is/authenticate';
const USER = 'mapp_g_12';
const PASS = 'AppDev=FunTime'

//update the authentication token
export const updateAuthentication = () => {
    return async dispatch => {
        let body = {
            username: USER,
            password: PASS
        }
        
        fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          dispatch(updateSuccess(responseJson.token));
        })
        .catch((error) => {
          console.error(error);
        });
    };
};

const updateSuccess = data => ({
    type: "UPDATE_TOKEN",
    payload: data
});