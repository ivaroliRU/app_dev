const url = 'http://api.kvikmyndir.is/theaters';

export const updateCinemas = (token) => {
    return async dispatch => {
        fetch(url+'?token='+token, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
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