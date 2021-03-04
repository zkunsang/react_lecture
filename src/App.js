import React, { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState("");

  function onAdd() {
    const todo = { id: currentId, desc: desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
  }

  function onDelete(e) {
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServer() {}

  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            <span>{item.desc}</span>
            <button data-id={item.id} onClick={onDelete}>
              delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button onClick={onAdd}>추가</button>
      <button onClick={onSaveToServer}>서버 전송</button>
    </div>
  );
}
