import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState(['Learn React', 'Build a Project']);

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}{' '}
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;