import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/mainComp/PageNotFound";
import MainLayout from "./components/mainComp/MainLayout";
import HomePage from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import TermsCondPage from "./components/pages/terms&cond/TermsCondPage";
import HelpPage from "./components/pages/help/HelpPage";

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
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "terms-conditions",
          element: <TermsCondPage />,
        },
        {
          path: "help",
          element: <HelpPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
