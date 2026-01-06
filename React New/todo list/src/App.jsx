import { useState } from "react";

const TodoApp = () => {
    const [todos , setTodos] = useState([]);
    const [input, setInput] = useState("");
    
    const addTodo = () =>{
        if (input.trim() === "") return;
        setTodos([...todos, { text: input, completed: false }]); 
        setInput('');
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo =(index) =>{
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todo-container">
            <h2>To-Do list</h2>
            <div className="todo-input">
                <input type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)}
                placeholder="add a new task..." />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, idx) => (
                    <li key={idx}
                     className={todo.completed ? 'completed' : ''} 
                     onClick={() => toggleTodo(idx)}>
                        {todo.text}
                        <button className="delete-btn" onClick={e => {e.stopPropagation(); deleteTodo(idx);}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
 
export default TodoApp;