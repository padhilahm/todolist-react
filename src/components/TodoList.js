import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
	return (
		<div className="todo-list">
			{todos.map((todo, idx) => (
				<TodoItem key={idx} todo={todo} idx={idx} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default TodoList;
