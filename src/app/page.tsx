//
"use client";

import { TodoForm } from "@/components/todoForm";
import { TodoList } from "@/components/todoList";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, text: "shopping" },
    { id: 2, text: "reading" },
  ]);

  const newTodoHandler = (newTodo: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ id: Math.random(), text: newTodo });
      return updatedTodos;
    });
  };

  const deleteTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      return prevTodos.filter((t) => t.id !== todoId);
      return updatedTodos;
    });
  };

  let todoList: React.JSX.Element = <p>No TODO</p>;

  if (todos.length > 0) {
    todoList = <TodoList items={todos} onDeleteItem={deleteTodoHandler} />;
  }

  return (
    <>
      <section id="todo-form">
        <TodoForm onAddTodo={newTodoHandler}></TodoForm>
      </section>
      <section id="todos">{todoList}</section>
    </>
  );
}
