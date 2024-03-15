import NavbarComponent from "./Components/NavbarComponent.jsx";
import SearchComponent from "./Components/Search/SearchComponent.jsx";
import SearchResultsComponent from "./Components/Search/SearchResultsComponent.jsx";

function App() {

    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('userId', userId);
    }

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
