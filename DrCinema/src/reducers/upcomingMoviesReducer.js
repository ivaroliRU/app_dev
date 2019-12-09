export default function(state = [], action) {
    switch (action.type) {
        case 'UPDATE_UPCOMING_MOVIES':
            var n_state = action.payload;
            return n_state;
        default:
            return state
    }
}