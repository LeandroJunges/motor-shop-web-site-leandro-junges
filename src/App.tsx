import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";
import Routes from "./routes/routes"
import AnnouncementsProvider from "./context/AnnouncementContext";

function App() {
  return (
    <div className="App">
    <AnnouncementsProvider>
      <GlobalStyle />
      <Routes/ >
    </AnnouncementsProvider>
    </div>
  );
}


export default App;
