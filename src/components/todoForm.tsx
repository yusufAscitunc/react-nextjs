"use client";

import React, { useState } from "react";
import { Button } from "./UI/Button";
import { MethodSignature } from "typescript";
import { HtmlProps } from "next/dist/shared/lib/html-context";

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

    // const newTodo = {
    //   id: Math.floor(Math.random() * 1000),
    //   text: todo,
    // };
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
