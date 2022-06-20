import * as React from 'react';
import TodoCount from '../components/TodoApp/TodoCount';
import TodoList from '../components/TodoApp/TodoList';

interface ITodoProps {
}

const Todo: React.FunctionComponent<ITodoProps> = (props) => {
  const [todos, setTodos] = React.useState(["john", "mike", "kyle"]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos(prevTodos => [...prevTodos, todo]);
  }

  return (
    <>
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <form onSubmit={handleSubmit}>
        <input type="text" id="todo" />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default Todo;
