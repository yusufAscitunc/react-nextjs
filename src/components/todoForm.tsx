"use client";

import React, { useState } from "react";
import { Button } from "./UI/Button";

export const TodoForm: React.FC<{ onAddTodo: (text: string) => void }> = (
  props
) => {
  const [todo, setTodo] = useState("");

  const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const itemHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
    props.onAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={itemHandler}>
      <div className="form-control">
        <label htmlFor="">To-Do</label>
        <input
          type="text"
          className="text-black-400"
          value={todo}
          onChange={todoHandler}
        />
      </div>
      <Button type="submit">Add To-Do</Button>
    </form>
  );
};
