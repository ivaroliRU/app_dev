import { getAllData } from '../services/contactsService';

//const initialState = await getAllData();

export default function(state = [], action) {
    switch (action.type) {
        case 'UPDATE_STARTED':
            return state;
        case 'UPDATE_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}