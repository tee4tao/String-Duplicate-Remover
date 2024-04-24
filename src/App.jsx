import { useState } from "react";
import Page1 from "./Page1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page2 from "./Page2";
import Error from "./Error";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      // path: "/",
      // element: <Nav />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Page1 /> },
        {
          path: `page2`,
          element: <Page2 />,
        },
      ],
    },
  ]);
  <RouterProvider router={router} />;
  return <RouterProvider router={router} />;
}

export default App;
