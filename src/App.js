import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import MainNavBar from "./components/navbars/MainNavBar";

import store from "./store/index";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

export const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <MainNavBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </Provider>
    </Router>
  );
};

export default App;
