import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
	return (
		<div className="todo-list">
			{todos.map((todo, idx) => (
				<TodoItem key={idx} todo={todo} idx={idx} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
			))}
		</div>
	);
};

export default TodoList;
