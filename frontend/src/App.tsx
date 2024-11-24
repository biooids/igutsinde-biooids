import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/mainComp/PageNotFound";
import MainLayout from "./components/mainComp/MainLayout";
import HomePage from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import TermsCondPage from "./components/pages/terms&cond/TermsCondPage";
import HelpPage from "./components/pages/help/HelpPage";
import ExercisesPage from "./components/pages/exercises/ExercisesPage";
import ExamPage from "./components/pages/exam/ExamPage";
import Exercise from "./components/pages/exercises/Exercise";
import Exam from "./components/pages/exam/Exam";
import LogIn from "./components/pages/auth/LogIn";
import SignUp from "./components/pages/auth/SignUp";
import Pricing from "./components/pages/pay/Pricing";
import AuthenticatedUser from "./components/mainComp/AuthenticatedUser";
import DashBoard from "./components/pages/dashBoard/DashBoard";
import Ibyapa from "./components/pages/reading/Ibyapa";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthenticatedUser />,
      errorElement: <PageNotFound />,
      children: [
        {
          element: <MainLayout />,
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
            {
              path: "pricing",
              element: <Pricing />,
            },

            {
              path: "exercises",
              element: <ExercisesPage />,
            },
            {
              path: "exercise/:exerciseId",
              element: <Exercise />,
            },
            {
              path: "exams",
              element: <ExamPage />,
            },
            {
              path: "exam/:examId",
              element: <Exam />,
            },
            {
              path: "dash-board",
              element: <DashBoard />,
            },
            {
              path: "ibyapa",
              element: <Ibyapa />,
            },
          ],
        },
      ],
    },

    {
      path: "/log-in",
      element: <LogIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
