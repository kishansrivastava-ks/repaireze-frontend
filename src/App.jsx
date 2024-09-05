import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import DeliveryPolicy from "./pages/DeliveryPolicy";
import Financing from "./pages/Financing";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="delivery-policy" element={<DeliveryPolicy />} />
            <Route path="financing" element={<Financing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
