import Routes from "./routes/routes";
import GlobalStyle from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
