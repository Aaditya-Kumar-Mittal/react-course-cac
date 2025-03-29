import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Expenses1, Invoices1 } from "./components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/invoices" element={<Invoices1 />} />
          <Route path="/expenses" element={<Expenses1 />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  <App />
  </StrictMode>
);
