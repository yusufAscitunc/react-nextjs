import { ReactNode } from "react";

type props = {
  id: number;
  onDelete: (id: number) => void;
  children: ReactNode;
};

export const TodoListItem: React.FC<props> = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todo-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};
