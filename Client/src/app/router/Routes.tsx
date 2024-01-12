import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/dashboard/ActivityDashboard";
import ActivityForm from "../../features/form/ActivityForm";
import ActivityDetails from "../../features/details/ActivityDetails";
import TestErrors from "../../features/errors/TestErrors";
import NotFound from "../../features/errors/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetails /> },
      { path: "createActivity", element: <ActivityForm key={"create"} /> },
      { path: "manage/:id", element: <ActivityForm key={"manage"} /> },
      { path: "errors", element: <TestErrors /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
