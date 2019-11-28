import tasks from '../../assets/data';

const initialState = tasks.tasks;

var largestID = initialState.length+1;

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK': 
            return[
            ...state,
            {
              id: largestID++,
              name: action.name,
              description: action.description,
              isFinished: false,
              listId: action.boardId
            }
            ]
            case 'DELETE_TASK':
                return state.filter(task => task.id != action.id);
            case 'MODIFY_TASK':
                for (var i = 0; i < state.length; i++){
                    if(state[i].id == action.id){
                        state[i].name = action.name;
                        state[i].description = action.description;
                        state[i].isFinished = state[i].isFinished;
                        state[i].listId = state[i].listId;
                    }
                }
                return state;
        default: return state;
    }
}