import { BrowserRouter, Route, Routes } from "react-router-dom";
import Channel from "./pages/Channel";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/channels" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
