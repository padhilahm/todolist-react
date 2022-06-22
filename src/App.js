import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
	const [todos, setTodos] = useState([
		{ text: "Makan", isCompleted: true },
		{ text: "Tidur", isCompleted: false },
		{ text: "Mandi", isCompleted: false },
	]);

	const addTodo = (value) => {
		const newTodos = [...todos, { text: value }];
		setTodos(newTodos);
	};

	const deleteTodo = (idx) => {
		const newTodos = [...todos];
		newTodos.splice(idx, 1);
		setTodos(newTodos);
	};

	const toggleTodo = (idx) => {
		const newTodos = [...todos];
		newTodos[idx].isCompleted = !newTodos[idx].isCompleted;
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="h3 mb-3">Todo List</div>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> {/* pass deleteTodo */}
		</div>
	);
};

export default App;
