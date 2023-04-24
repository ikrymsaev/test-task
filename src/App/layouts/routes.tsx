import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./MainLayout/MainLayout";
import { MainPage } from "./pages/MainPage/MainPage";
import { BeersPage } from "./pages/BeersPage/BeersPage";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/beers',
        element: <BeersPage />,
      },
    ]
  },
]);