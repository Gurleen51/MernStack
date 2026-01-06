import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./common/layout";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Aboutus from "./pages/Aboutus";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/aboutus",
          element: <Aboutus />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: { duration: 2500 },
          error: { duration: 3000 },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;