
export interface todoStateItem {
    id: number,
    text: string,
    completed: boolean,
}

export default interface TodoListType {
    todos: Array<todoStateItem>,
    deleteTodo: (id: number) => any,
    toggleTodo: (id: number) => any,

} 