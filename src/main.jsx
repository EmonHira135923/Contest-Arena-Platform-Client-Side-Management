import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "../src/Router/Router";
import { ToastContainer } from "react-toastify";
import Authcontext from "./Context/Authcontext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Step 1: QueryClient বানাও
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> {/* Step 2: Wrap App */}
      <Authcontext>
        <RouterProvider router={Router} />
        <ToastContainer />
      </Authcontext>
    </QueryClientProvider>
  </StrictMode>
);
