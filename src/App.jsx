import { useState } from "react";
import Page1 from "./Page1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page2 from "./Page2";
import Error from "./Error";
import Page3 from "./Page3";
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
          path: `page1`,
          element: <Page1 />,
        },
        {
          path: `page2`,
          element: <Page2 />,
        },
        {
          path: `page3`,
          element: <Page3 />,
        },
      ],
    },
  ]);
  <RouterProvider router={router} />;
  return <RouterProvider router={router} />;
}

export default App;
