import UserProvider from "./context/UserContext";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";
import Routes from "./routes/routes"

function App() {
  return (
    <div className="App">
    <UserProvider>
      <Home />
      <GlobalStyle />
      <Routes/ >
    </UserProvider>
    </div>
  );
}


export default App;
