import ReactDOM from "react-dom/client";
import "./assets/styles/main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerTree } from "./routes/root";

const router = createBrowserRouter(routerTree);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // <MainPage />
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
  // </React.StrictMode>
);
