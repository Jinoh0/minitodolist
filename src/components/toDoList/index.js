import { useState } from "react";
import axios from "axios";

export function ToDoList() {
  const [toDo, setToDo] = useState({
    todo: "",
  });

  function handleChange(e) {
    setToDo({ ...toDo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/jinotodolist", toDo);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(toDo);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What should i do ?"
          value={toDo.todo}
          name="todo"
          onChange={handleChange}
        />
        <button type="submit">DO IT TOMORROW</button>
      </form>
    </>
  );
}
