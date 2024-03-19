import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import HomeShimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import CORSWarn from "./components/CORSwarn";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (
      window.location.pathname === "/success" ||
      window.location.pathname === "/cancel"
    ) {
      setIsModalOpen(false);
    }
  }, []);

  if (window.location.pathname === "/success") return <Success />;
  if (window.location.pathname === "/cancel") return <Cancel />;
  if (isModalOpen) return <CORSWarn setIsModalOpen={setIsModalOpen} />;

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Route
          path="/instamart"
          element={
            <Suspense fallback={<HomeShimmer />}>
              <InstaMart />
            </Suspense>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

ReactDOM.render(
  <Router>
    <AppLayout />
  </Router>,
  document.getElementById("root")
);
