import { TodoListItem } from "./todoItems";

type props = {
  items: { id: number; text: string }[];
  onDeleteItem: (todoId: number) => void;
};

export const TodoList: React.FC<props> = (props) => {
  return (
    <ul className="todo-list">
      {props.items.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} onDelete={props.onDeleteItem}>
          {todo.text}
        </TodoListItem>
      ))}
    </ul>
  );
};
