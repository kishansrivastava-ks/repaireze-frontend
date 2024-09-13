import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import DeliveryPolicy from "./pages/DeliveryPolicy";
import Financing from "./pages/Financing";
import Outlet from "./pages/Outlet";
import { Toaster } from "react-hot-toast";
import LearningCenter from "./pages/Navigation/LearningCenter";

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
            <Route path="outlet" element={<Outlet />} />
            <Route path="learning-center" element={<LearningCenter />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
