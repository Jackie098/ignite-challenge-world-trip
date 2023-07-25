import type { AppProps } from "next/app";
import { makeServer } from "@/services/mirage";

import { ChakraProvider } from "@chakra-ui/react";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
