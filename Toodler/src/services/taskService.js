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

//delete task
export function deleteTask(id){
    for(var i = 0; i < boards.tasks.length; i++){
        if(boards.tasks[i].id == id){
            boards.tasks.splice(i, 1);
        }
    }
}

//delete task from list
export function deleteTaskFromList(listId){
    for(var i = 0; i < boards.tasks.length; i++){
        if(boards.tasks[i].listId == listId){
            boards.tasks.splice(i, 1);
        }
    }
}

//delete lists and all tasks in that list
export function deleteList(id){
    for(var i = 0; i < boards.lists.length; i++){
        if(boards.lists[i].id == id){
            deleteTaskFromList(boards.lists[i].id);
            boards.lists.splice(i, 1);
        }
    }
}

//delete task from list
export function deleteListFromBoard(boardId){
    for(var i = 0; i < boards.lists.length; i++){
        if(boards.lists[i].boardId == boardId){
            deleteTaskFromList(boards.lists[i].id);
            boards.lists.splice(i, 1);
        }
    }
}

//delete boards and all lists and tasks in that board
export function deleteBoard(id){
    for(var i = 0; i < boards.boards.length; i++){
        if(boards.boards[i].id == id){
            deleteListFromBoard(boards.boards[i].id);
            boards.boards.splice(i, 1);
        }
    }
}

function findNextBoardId(){
    maxid = 0
    for(var i = 0; i < boards.boards.length; i++){
        if(boards.boards[i].id > maxid){
            maxid = boards.boards[i].id
        }
    }
    return maxid + 1
}

export function addBoard(name, image){
    newBoardId = findNextBoardId()
    boards.boards.push({
        id: newBoardId,
        name: name,
        thumbnailPhoto: image
    })
    console.log(boards.boards)
}
