import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  // Todo の配列（初期値は空）
  const [todos, setTodos] = useState<Todo[]>([]);
  
  // 入力欄の文字列
  const [newTodo, setNewTodo] = useState("");
  const handleAdd = () => {
    if (newTodo.trim() === "") return; // 空文字は無視
  
    const todo: Todo = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
  
    setTodos([...todos, todo]); // 新しい配列を作って追加
    setNewTodo(""); // 入力欄をリセット
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="新しい Todo"
      />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
