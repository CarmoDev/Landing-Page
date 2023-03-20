import type { AppProps } from "next/app";
import GlobalStyles from "../styles/Global";
import defaultTheme from "../styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Container } from "@/styles/Container";
import Rain from "@/Components/RainEffect";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Rain />
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
