import { Html, Head, Main, NextScript } from "next/document";

import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <StyledComponentsRegistry>
          <>
            <Main />
            <NextScript />
          </>
        </StyledComponentsRegistry>
      </body>
    </Html>
  );
}
