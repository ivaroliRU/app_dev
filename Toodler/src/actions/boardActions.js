import { getAllBoards } from '../services/taskService';

export const getCurrentBoards = () => {
    return dispatch => {
        const currentboards = getAllBoards();
        dispatch(getCurrentBoardsSuccess(currentboards));
    };
}

const getCurrentBoardsSuccess = currentboards => ({
    type: 'GET_CURRENT_BOARDS',
    payload: currentboards
});