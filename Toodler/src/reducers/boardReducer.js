import boards from '../../assets/data';

const initialState = boards.boards;

var largestID = initialState.length+1;

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOARD': 
            return[
            ...state,
            {
              id: largestID++,
              name: action.name,
              thumbnailPhoto: action.thumbnailPhoto
            }
            ]
            case 'DELETE_BOARD':
                return state.filter(board => board.id != action.id);
            case 'MODIFY_BOARD':
                for (var i = 0; i < state.length; i++){
                    if(state[i].id == action.id){
                        state[i].name = action.name;
                        state[i].thumbnailPhoto = action.thumbnailPhoto;
                    }
                }
                return state;
        default: return state;
    }
}