initState = [];

export default function(state = initState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            var obj = {
                name: action.name,
                image: action.image,
                phone: action.phone
            }
            state.push(obj);
            return state;
        case 'UPDATE_CONTACTS':            
            return action.payload;
        default:
            return state;
    }
}