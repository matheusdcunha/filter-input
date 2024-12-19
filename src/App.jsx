import { useEffect, useState } from "react";

import "./App.module.css";
import Input from "./components/Input/Input";

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);

  function handleUsername(e) {
    setUsername(e.target.value);

    const usernameMin = username.toLowerCase();
    fetchData(usernameMin);
  }

  async function fetchData(username) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const resposta = await response.json();
    if (username) {
      const respostaFiltrada = resposta.filter((user) => {
        return user && user.name && user.name.toLowerCase().includes(username);
      });
      setData(respostaFiltrada);
    } else {
      setData(resposta);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (username === "") {
      fetchData();      
    }
  }, [username]);

  return (
    <>
      <div className="container a">
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <Input value={username} onChange={handleUsername} type="text" />
          {data.map((user, index) => {
            return <p key={index}>{user.name}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
