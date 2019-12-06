initState = [];

export default function(state = initState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            console.log("Adding a new contact");

            var obj = {
                name: action.name,
                photo: action.image,
                phoneNumber: action.phone
            }
            n_state = state.slice();
            n_state.push(obj);

            return n_state;
        case 'UPDATE_CONTACTS':
            return action.payload;
        case 'MODIFY_CONTACT':
            console.log("modify received");
            n_state = [];
            
            for (var i = 0; i < state.length; i++){
                if(state[i].name == action.formerName){
                    state[i].name = action.name;
                    state[i].photo = action.image;
                    state[i].phoneNumber = action.phone;
                }
                n_state.push(state[i]);
            }
            return n_state;
        default:
            return state;
    }
}