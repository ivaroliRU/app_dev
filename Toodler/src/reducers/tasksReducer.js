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
              listId: action.listId
            }
            ]
            case 'DELETE_TASK':
                return state.filter(task => task.id != action.id);
            case 'MODIFY_TASK':
                n_state = state.filter(task => task.id != action.id);
                n_task = {id: action.id, name: action.name, description: action.description, listId: action.listId, isFinished: action.isFinished};
                n_state.push(n_task);
                return n_state;
            case 'CHECK_TASK':
                n_state = [];
                for(var i = 0; i < state.task.length; i++){
                    if(state[i].id == action.id){
                        state[i].isFinished = action.isFinished;
                    }
                    n_state.push(state[i]);
                }
                return n_state;
        default: return state;
    }
}