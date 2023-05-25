export const TodoListItem = (props: any) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="todo-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};
