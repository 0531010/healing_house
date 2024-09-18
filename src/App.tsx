import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Landing_page from "./pages/landing_page/Landing_page";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Outlet />}>
          <Route path="/" element={<Landing_page />} />
          <Route path="/login" />
          <Route path="/about" />
          <Route path="/help" />
        </Route>
      </Routes>
    </div>
  );
}
