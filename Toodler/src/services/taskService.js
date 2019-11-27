import boards from '../../assets/data';
import lists from '../../assets/data';

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

<<<<<<< HEAD
=======
function findNextListId(){
  maxid = 0
  for(var i = 0; i < lists.lists.length; i++){
    if(lists.lists[i].id > maxid){
      maxid = lists.lists[i].id
    }
  }
  return maxid + 1
}
// Add list
export function addList(name) {
  newListId = findNextListId()
  if(name != ''){
    lists.lists.push({
      id: newListId,
      name: name
    })
  }
  else{

  }
  console.log(lists.lists)

>>>>>>> 411fb8334c79b3c032b3ddf3f6f4eb92f8801e0f
// find next available id
function findNextBoardId(){
    maxid = 0
    for(var i = 0; i < boards.boards.length; i++){
        if(boards.boards[i].id > maxid){
            maxid = boards.boards[i].id
        }
    }
    return maxid + 1
}

// Check if image is actually an image.
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

// add board to data.
export function addBoard(name, image){
    newBoardId = findNextBoardId()
        if(name != '' && image != '' && checkURL(image)){
        boards.boards.push({
            id: newBoardId,
            name: name,
            thumbnailPhoto: image
        })
    }
    else{

    }
    console.log(boards.boards)
<<<<<<< HEAD
=======

>>>>>>> 411fb8334c79b3c032b3ddf3f6f4eb92f8801e0f
}
