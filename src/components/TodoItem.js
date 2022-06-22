import React from "react";

const TodoItem = ({ todo, idx, toggleTodo, deleteTodo, editTodo }) => {
	const edit = () => {
		console.log(todo.text);
		editTodo(idx, todo.text);
	};

	return (
		<div className="todo-item">
			<div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</div>
			<div className="todo-group-btn">
				<button type="button" className="btn btn-success btn-sm me-1" onClick={() => toggleTodo(idx)}>
					<i class="bi bi-clipboard-check-fill"></i>
				</button>
				<button type="button" className="btn btn-warning btn-sm me-1" onClick={edit}>
					<i class="bi bi-pencil-fill"></i>
				</button>
				{/* add delete button */}
				<button type="button" className="btn btn-danger btn-sm" onClick={() => deleteTodo(idx)}>
					<i className="bi bi-archive-fill"></i>
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
