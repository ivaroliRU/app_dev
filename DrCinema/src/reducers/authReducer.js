export default function(state = {token: ''}, action) {
    switch (action.type) {
        case 'UPDATE_TOKEN':
            n_state = {token: action.payload }
            return n_state;
        default:
            return state
    }
}