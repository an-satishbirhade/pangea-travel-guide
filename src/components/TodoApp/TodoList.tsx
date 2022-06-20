import * as React from 'react';

interface ITodoListProps {
  todos: string[],
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
};

export default TodoList;
