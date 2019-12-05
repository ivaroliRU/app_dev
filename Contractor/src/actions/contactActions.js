import {getAllData, addContact, modifyContact} from '../services/contactsService';
var isAddingAContact = false, ExceptionThrown = false;

//get data from the stored json files
export const updateContacts = () => {
    return async dispatch => {
        data = await getAllData();
        dispatch(updateSuccess(data));
    };
};

//modify the contact in the state and in the file if there is one
export const modContact = (formerName, name, phone, image) => {
    return async dispatch => {
        console.log("sending mod message");
        
        modifyContact(formerName, name, phone, image);
        dispatch(modifyContactSuccess(formerName, name, phone, image));
    };
};

//add a contact to the state and to the files
export const addContactToState = (name, phone, image) => {
    return async dispatch => {
        //disable adding mutlible contact at once.... async problem
        try{
            if(!isAddingAContact)
                await addContact(name,phone,image);
        }
        catch(e){
            console.log(e);
            ExceptionThrown = true;
        }
        finally{
            if(!isAddingAContact && !ExceptionThrown)
                dispatch(addContactSuccess(name,phone,image));
            ExceptionThrown = false;
            isAddingAContact = false;
        }
    };
};

const addContactSuccess = (name,phone,image) => ({
    type: "ADD_CONTACT",
    name: name,
    phoneNumber: phone,
    image: image
});

const modifyContactSuccess = (formerName, name, phone, image) => ({
    type: "MODIFY_CONTACT",
    formerName:formerName,
    name: name,
    phone: phone,
    image: image
});

const updateSuccess = data => ({
    type: "UPDATE_CONTACTS",
    payload: data
});
