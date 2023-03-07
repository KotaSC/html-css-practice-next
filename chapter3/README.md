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

### 2カラムのWebサイトを作成する手順（ざっくり）

1. 横並びにしたいコンテンツを囲む `Container` を作成
2. 1の `Container` に `display: flex`，`justify-content: hogehoge`を設定
3. 1の`Container`の子要素に，横並びにしたいコンテンツを設定
4. 横並びにしたいコンテンツのそれぞれの横幅を決める
