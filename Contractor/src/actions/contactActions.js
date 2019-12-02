import {getAllData, addContact} from '../services/contactsService';

export const updateContacts = () => {
    return dispatch => {
        dispatch(updateStarted());
        getAllData()
        
        getAllData(
            (data) => dispatch(updateSuccess(data))
        );
    };
};

export const addContactToState = (name, phone, image) => {
    return dispatch => {
        addContact(name,phone,image);
        dispatch(addContactSuccess(name,phone,image));
    };
};

const addContactSuccess = (name,phone,image) => ({
    type: "ADD_CONTACT",
    name: name,
    phone: phone,
    image: image
});

const updateSuccess = data => ({
    type: "UPDATE_SUCCESS",
    payload: {
      ...data
    }
});

const updateStarted = () => ({
    type: "UPDATE_STARTED"
});