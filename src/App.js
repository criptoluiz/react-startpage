import "./App.css";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";
import LinkContainer from "./components/LinkContainer";

function App() {
  return (
    <div className="App">
      <Weather />
      <br />
      <LinkContainer />
      <SearchBar />
    </div>
  );
}

export default App;
