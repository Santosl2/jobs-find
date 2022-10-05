/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import type { AppProps } from "next/app";

import { QueryClientProvider } from "@tanstack/react-query";

import "../../styles/globals.scss";
import { queryClient } from "@/shared/services/queryClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
