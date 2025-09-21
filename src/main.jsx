import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx"; // gunakan komponen terpisah

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Loading />
  </StrictMode>
);

setTimeout(() => {
  root.render(
    <StrictMode>
      <>
        <Header />
        <Menu />
        <App />
        <Footer />
      </>
    </StrictMode>
  );
}, 2000);

setTimeout(() => {
  root.render(
    <StrictMode>
      <>
        <Header />
        <Menu />
        <App />
        <Footer />
      </>
    </StrictMode>
  );
}, 2000);
