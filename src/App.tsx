import React from "react";
import "./App.css";

import Header from "./Components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Footer from "./Components/Footer";

import CartContextProvider from "./context/cartContext";

function App() {
  const router = useRoutes(routes);

  return (
    <CartContextProvider>
      <div className="app">
        <Header />

        {/* Start Content */}

        {router}

        {/* Finish Content */}

        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
