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
        case 'MODIFY_CONTACT':
            for (var i = 0; i < state.length; i++){
              if(state[i].id == action.id){
                state[i].name = action.name;
                state[i].image = action.image;
                state[i].phone = action.phone;
                }
              }
                    return state;
        default:
            return state;
    }
}
