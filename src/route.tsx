import { Link, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="text-2xl justify-center m-40">
        <p>Oops.</p>
        <p>Something went wrong.</p>
        <Link to="/" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    ),
  },
]);
