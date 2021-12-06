import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Channel } from "./pages/Channel";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/channels/:id" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
