import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import bgImg from "../assets/images/bg.png";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: #949087;
    font-family: sans-serif;
    background: url(${bgImg.src});
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
