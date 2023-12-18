import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About"
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeShimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart"

const InstaMart = lazy(() => import("./components/InstaMart"))

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<HomeShimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

//npm run = npx;
//npm run start = npm start
