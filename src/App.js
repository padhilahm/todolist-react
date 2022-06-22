import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState([
		{ text: "Makan", isCompleted: true },
		{ text: "Tidur", isCompleted: false },
		{ text: "Mandi", isCompleted: false },
	]);

	const [value, setValue] = React.useState("");
	const [editIdx, setEditIdx] = React.useState(-1);
	const [buttonText, setButtonText] = React.useState("bi bi-plus-circle-fill");

	const addTodo = (value) => {
		const newTodos = [...todos, { text: value }];
		setTodos(newTodos);
	};

	const deleteTodo = (idx) => {
		const newTodos = [...todos];
		newTodos.splice(idx, 1);
		setTodos(newTodos);
	};

	const editTodo = (idx, value) => {
		setValue(value);
		setEditIdx(idx);
		setButtonText("bi bi-pencil-square");
		console.log(idx);
	};

	const updateTodo = (idx, value) => {
		const newTodos = [...todos];
		newTodos[idx].text = value;
		setTodos(newTodos);
	};

	const toggleTodo = (idx) => {
		const newTodos = [...todos];
		newTodos[idx].isCompleted = !newTodos[idx].isCompleted;
		setTodos(newTodos);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		if (editIdx === -1) {
			addTodo(value);
		} else {
			updateTodo(editIdx, value);
			setEditIdx(-1);
		}
		setButtonText("bi bi-plus-circle-fill");
		setValue("");
	};

	return (
		<div className="app container-fluid">
			<div className="h3 mb-3">Todo List</div>
			<form onSubmit={handleSubmit}>
				<div className="row mb-3 ms-5">
					<div className="col-8">
						<input type="text" className="todo-input form-control" placeholder="Add todo list" value={value} onChange={(e) => setValue(e.target.value)} />
					</div>
					<div className="col-4 mt-3">
						<button type="submit" className="btn fw-bold ms-lg-3">
							<i className={buttonText}></i>
						</button>
					</div>
				</div>
			</form>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} /> {/* pass deleteTodo */}
		</div>
	);
};

export default App;
