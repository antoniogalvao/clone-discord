import { BrowserRouter, Route, Routes } from "react-router-dom";
import Channel from "./pages/Channel";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channels/:id" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
