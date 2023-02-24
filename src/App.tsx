import CreateAnnouncementModal from "./components/createAnnouncementModal";
import EditAnnouncementModal from "./components/editAnnouncementModal";
import Routes from "./routes/routes";
import GlobalStyle from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
