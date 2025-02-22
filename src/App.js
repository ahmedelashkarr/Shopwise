import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home'
import React from 'react';
import Login from "./Components/Login";
import ProductDetails from "./Components/ProductDetails";
import './css/all.min.css';
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/ionicons.min.css';
import './css/linearicons.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.css';
import './css/owl.theme.default.min.css';
import './css/responsive.css';
import './css/simple-line-icons.css';
import './css/slick-theme.css';
import './css/slick.css';
import './css/style.css';
import './css/themify-icons.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout Route */}
        <Route path="/" element={<Main />}>
          {/* Nested Routes (appear inside <Outlet />) */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login></Login>} />
          <Route path="Product/:id" element={<ProductDetails></ProductDetails>} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
