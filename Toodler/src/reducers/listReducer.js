import lists from '../../assets/data';

const initialState = lists.lists;

var largestID = initialState.length+1;

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LIST': 
            return[
            ...state,
            {
              id: largestID++,
              name: action.name,
              color: action.color,
              boardId: action.boardId
            }
            ]
            case 'DELETE_LIST':
                return state.filter(list => list.id != action.id);
            case 'MODIFY_LIST':
                for (var i = 0; i < state.length; i++){
                    if(state[i].id == action.id){
                        state[i].name = action.name;
                        state[i].color = action.color;
                        state[i].boardId = state[i].boardId;
                    }
                }
                return state;
        default: return state;
    }
}