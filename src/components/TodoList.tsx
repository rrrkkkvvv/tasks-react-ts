import TodoItem from './TodoItem'
import TodoListType from '../types/TodoListType'

const TodoList = ({ todos, deleteTodo, toggleTodo }: TodoListType) => {

    return (
        <ul className="todo-list">

            {todos.map(todo => (
                <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} completed={todo.completed} id={todo.id} text={todo.text} />
            ))}
        </ul>
    )
}
export default TodoList