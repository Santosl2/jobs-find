/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@/shared/store";

import "../../styles/globals.scss";
import { queryClient } from "@/shared/services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<>Loading</>} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
