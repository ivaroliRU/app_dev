import boards from '../../assets/data';

export function getAllBoards(){
    return boards.boards;
}

export function getAllListsFromBoard(boardId){
    var lists = [];

    for(var i = 0; i < boards.lists.length; i++){
        if(boards.lists[i].boardId == boardId){
            lists.push(boards.lists[i]);
        }
    }

    return lists;
}

export function getAllTasksFromList(listId){
    var items = [];

    for(var i = 0; i < boards.tasks.length; i++){
        if(boards.tasks[i].listId == listId){
            items.push(boards.tasks[i]);
        }
    }

    return items;   
}