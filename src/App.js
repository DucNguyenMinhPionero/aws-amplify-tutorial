import { generateClient } from "aws-amplify/api";

import logo from "./logo.svg";
import "./App.css";
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";

const API = generateClient();

function App() {
  async function fetchTodos() {
    let response = await API.graphql({
      query: queries.listTodos,
    });

    console.log(response);
  }

  async function createTodos() {
    let myTodo = {
      name: "Test 4",
      description: "Description 4",
    };

    const response = await API.graphql({
      query: mutations.createTodo,
      variables: {
        input: myTodo,
      },
    });

    console.log(response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Version 2</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={fetchTodos}>Fetch to do</button>
        <button onClick={createTodos}>Create to do</button>
      </header>
    </div>
  );
}

export default App;
