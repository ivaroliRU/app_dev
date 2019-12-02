import { getAllData } from '../services/contactsService';

//const initialState = await getAllData();

export default function(state = [], action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return[
                ...state,
                {
                    name: action.name,
                    image: action.image,
                    phone: action.phone
                }
                ]
        case 'UPDATE_STARTED':
            return state;
        case 'UPDATE_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}