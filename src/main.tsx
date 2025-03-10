import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import App from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                {/* <App /> */}
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    </StrictMode>
);
