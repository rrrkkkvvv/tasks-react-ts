import { todoStateItem } from "./TodoListType";
export default interface TodoType extends todoStateItem {
    deleteTodo: (id: number) => any,
    toggleTodo: (id: number) => any,
} 