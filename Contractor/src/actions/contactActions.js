import {getAllData} from '../services/contactsService';

export const updateContacts = () => {
    return dispatch => {
        dispatch(updateStarted());
        getAllData()
        
        getAllData((data) => (
            data => dispatch(updateSuccess(data))
        ));
    };

    
};

const updateSuccess = todo => ({
    type: "UPDATE_SUCCESS",
    payload: {
      ...data
    }
});

const updateStarted = () => ({
    type: "UPDATE_STARTED"
});