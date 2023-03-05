# Chapter3

## メモ

### styled-componentsでリセットcssを適用する手順

1. `yarn add styled-rest`
2. `_app.tsx`を以下のように修正

```ts
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
```
