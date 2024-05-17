import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
// global styles
import "./index.css";
// routes/pages
import { ContextProvider } from "./contexts/ContextProvider";
import router from "./router";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ContextProvider>
  </React.StrictMode>
);





