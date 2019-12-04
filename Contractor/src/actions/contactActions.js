import {getAllData, addContact} from '../services/contactsService';

export const updateContacts = () => {
    return async dispatch => {
        data = await getAllData();
        dispatch(updateSuccess(data));
    };
};

export const addContactToState = (name, phone, image) => {
    return async dispatch => {
        try{
            await addContact(name,phone,image);
            dispatch(addContactSuccess(name,phone,image));
        }
        catch(e){
            console.log(e);
        }
    };
};
export const modifyContactToState = (id, name, phone, image) => {
    return async dispatch => {
        try{
            await addContact(id, name,phone,image);
            dispatch(modifyContactSuccess(id, name,phone,image));
        }
        catch(e){
            console.log(e);
        }
    };
};

const addContactSuccess = (name,phone,image) => ({
    type: "ADD_CONTACT",
    name: name,
    phone: phone,
    image: image
});
const modifyContactSuccess = (id, name,phone,image) => ({
    type: "MODIFY_CONTACT",
    id: id,
    name: name,
    phone: phone,
    image: image
});

const updateSuccess = data => ({
    type: "UPDATE_CONTACTS",
    payload: data
});
