import type { AppProps } from "next/app";
import GlobalStyles from "../styles/Global";
import defaultTheme from "../styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
