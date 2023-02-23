import UserProvider from "./context/UserContext";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
    <UserProvider>
      <Home />
      <GlobalStyle />
    </UserProvider>
    </div>
  );
}

export default App;
