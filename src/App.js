import './App.css';

function App() {
  return (
    <div className="App">
      <h1>welcome, inranil</h1>
      <h4>your task</h4>
      <div className="todo">
        <div className="checkbox"></div>
        <div className="text">get the bread</div>
        <div className="delete-todo">X</div>
      </div>
      <div className="todo is-completed">
        <div className="checkbox"></div>
        <div className="text">get the milk</div>
        <div className="delete-todo">X</div>
      </div>
    </div>
  );
}

export default App;
