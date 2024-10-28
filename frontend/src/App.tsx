import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/mainComp/PageNotFound";
import MainLayout from "./components/mainComp/MainLayout";
import HomePage from "./components/pages/home/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
