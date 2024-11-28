import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./routes/Root";
import { ErrorPage } from "./ErrorPage";
import { HomePage } from "./routes/HomePage";
import { AboutPage } from "./routes/AboutPage";
import { ContactPage } from "./routes/ContactPage";
import { TempPage } from "./routes/TempPage";
import { BlogPage } from "./routes/BlogPage";
import { PostPage } from "./routes/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "temp",
            element: <TempPage />,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "blog",
            element: <BlogPage />,
          },
          {
            path: "blog/:id",
            element: <PostPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
