import boards from '../../assets/data';

const initialState = boards.tasks;

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK': 
            return[
            ...state,
            {
              id: action.id,
              name: action.name,
              description: action.description,
              isFinished: false,
              listId: action.listId
            }
            ]
        default: return state;
    }
}