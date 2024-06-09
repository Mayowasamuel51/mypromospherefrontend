import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react";
// global styles
import "./index.css";
// routes/pages
import { ContextProvider } from "./contexts/ContextProvider";
import router from "./router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Analytics> */}
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <SpeedInsights/>
          <Analytics />
        </QueryClientProvider>
      </ContextProvider>
    {/* </Analytics> */}
  </React.StrictMode>
);
