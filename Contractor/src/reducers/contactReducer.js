initState = [];

export default function(state = initState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            console.log("Adding a new contact");
            
            var obj = {
                name: action.name,
                image: action.image,
                phone: action.phone
            }
            n_state = state.slice();
            n_state.push(obj); 
            
            return n_state;
        case 'UPDATE_CONTACTS':            
            return action.payload;
        default:
            return state;
    }
}