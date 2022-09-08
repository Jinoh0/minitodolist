import { useEffect, useState } from "react";
import { ToDoList } from "./components/toDoList";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/jinotodolist"
      );
      setList(response.data);
      console.log(response.data)
    }
    fetchList();
    
  }, []);

  return (
    <div className="App">
      <h1>to no app</h1>

      <ToDoList />

      {list.map((current)=>{
        return(

        <p>{current.todo}</p>
        )

      })}




    </div>
  );
}

export default App;
