import boards from '../../assets/data';

const initialState = boards.boards;

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOARD': 
            return[
            ...state,
            {
              id: action.id,
              name: action.name,
              thumbnailPhoto: action.thumbnailPhoto
            }
            ]
            case 'DELETE_BOARD':
                return state.filter(board => board.id != action.id);
        default: return state;
    }
}