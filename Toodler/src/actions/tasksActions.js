let nextTodoId = 100;

export const addTask = (name, description, listId, ) => ({
  type: 'ADD_TASK',
  id: nextTodoId++,
  name,
  description,
  listId
})