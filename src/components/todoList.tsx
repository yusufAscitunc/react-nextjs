import { TodoListItem } from "./todoItems";

export const TodoList = (props: any) => {
  return (
    <ul className="todo-list">
      {props.items.map((todo: any) => (
        <TodoListItem key={todo.id} id={todo.id} onDelete={props.onDeleteItem}>
          {todo.text}
        </TodoListItem>
      ))}
    </ul>
  );
};
