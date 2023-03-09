import "./App.css";
import Navbar from "./navbar";

function App() {
  const title = "Welcome to the new blog";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
