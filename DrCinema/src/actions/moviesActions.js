const movies_url = 'http://api.kvikmyndir.is/movies';
const upcomming_url = 'http://api.kvikmyndir.is/upcoming';

export const updateMovies = (token) => {
    return async dispatch => {
        fetch(movies_url+'?token='+token, {
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

export const updateUpcomingMovies = (token) => {
  return async dispatch => {
      fetch(upcomming_url+'?token='+token, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(updateUpcomingSuccess(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export const getRandomUpcommingPoster = (token) => {
    return async dispatch => {
        fetch(upcomming_url+'?token='+token, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
          dispatch(updatePoster(responseJson[0].poster));
        })
        .catch((error) => {
          console.error(error);
        });
    }
};

const updateSuccess = data => ({
  type: "UPDATE_MOVIES",
  payload: data
});

const updateUpcomingSuccess = data => ({
  type: "UPDATE_UPCOMING_MOVIES",
  payload: data
});

const updatePoster = data => ({
    type: "UPDATE_POSTER",
    payload: data
  });