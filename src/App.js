import './App.css';
import Worker from "./components/AllWorker/Worker";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* Header Section  */}
      <Header></Header>
      {/* Main body section */}
      <Worker></Worker>
    </div>
  );
}

export default App;
