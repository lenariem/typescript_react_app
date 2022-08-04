import React, { useState } from "react";
import { Todo } from "./models";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { idText } from "typescript";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        /* setTodos([...todos, { id: Math.random().toString(), text: text }]); */
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Math.random().toString(), text: text },
        ]);
    };

    const toDeleteHandler = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={todos} onDeleteTodo={toDeleteHandler} />
        </div>
    );
};

export default App;
