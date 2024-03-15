import NavbarComponent from "./Components/NavbarComponent.jsx";
import SearchComponent from "./Components/Search/SearchComponent.jsx";
import SearchResultsComponent from "./Components/Search/SearchResultsComponent.jsx";

function App() {

  return (
      <div className="App">
          <header>
              <NavbarComponent />
          </header>
          <SearchComponent />
          <SearchResultsComponent />
      </div>
  );
}

export default App;
