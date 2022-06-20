import * as React from 'react';

interface ITodoCountProps {
  todos: string[],
}

const TodoCount: React.FunctionComponent<ITodoCountProps> = ({ todos }) => {
  return (
    <h1>Total Todos:{todos.length} </h1>
  );
};

export default TodoCount;
