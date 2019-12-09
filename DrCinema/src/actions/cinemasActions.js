const url = 'http://api.kvikmyndir.is/theaters';

export const updateCinemas = (token) => {
    return async dispatch => {
        fetch(url, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'x-access-token':token
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {          
          dispatch(updateSuccess(responseJson));
        })
        .catch((error) => {
          console.error(error);
        });
    }
}

const updateSuccess = data => ({
  type: "UPDATE_CINEMAS",
  payload: data
});