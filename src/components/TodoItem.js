import React from "react";

const TodoItem = ({ todo, idx, toggleTodo, deleteTodo }) => {
	return (
		<div className="todo-item">
			<div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</div>
			<div className="todo-group-btn">
				<button type="button" className="btn btn-success btn-sm me-1" onClick={() => toggleTodo(idx)}>
					<i class="bi bi-clipboard-check-fill"></i>
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
