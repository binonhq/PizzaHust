import "./App.jsx";
import { UserContextProvider } from "./pages/UserContext";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<RegisterPage />} /> */}
    </Routes>
  );
}

export default App;
