import { createGlobalStyle, css } from "styled-components";
import type { AppProps } from "next/app";
import Provider from "@/context/context";
import 'aos/dist/aos.css';
import "swiper/css/bundle";
import "animate.css/animate.min.css";
import { AnimatePresence } from "framer-motion"

const ResetStyles = createGlobalStyle`
  ${() => css`
    html, main, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      font-family: 'Gilroy', sans-serif;
      vertical-align: baseline;
      scroll-behavior: smooth;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ::-webkit-scrollbar {
      width: 0px;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  `}
`;

const GlobalStyles = createGlobalStyle`
  ${() => css`
    @font-face {
      font-family: 'Gilroy';
      src: local('Gilroy'), url(/font/Gilroy.ttf) format('truetype');
      font-display: swap;
    }
    
    :root {
      --primary-color: #FF1A56;
      --secondary-color: #D80B4B;
      --tertiary-color: #a1103e;
      --quartenary-color: #F988A7;
      --quinternary-color: #101112;
      --senary-color: #101112;
      --septenary-color: yellow;
      --octonary-color: pink;
      --nonary-color: blue;
      --gradient-color: linear-gradient(90deg, #FF1A56 0%, #D80B4B 100%);
      --gradient-color-1: linear-gradient(90deg, #D80B4B 0%, #1A1313 100%);
      --gradient-color-2: linear-gradient(90deg, #FF1A56 0%, #af1747 100%);
      --gradient-color-3: linear-gradient(130deg, #FF1A56 40%, #D80B4B 100%);
      --gradient-color-4: linear-gradient(130deg, #FF1A56 0%, #342118 100%);
      --gradient-color-animation: linear-gradient(45deg, #FF1A56, #ff2c6f, #ff4375, #FF1A56, #ff2c6f, #ff4375);
      --grey-0: #28292A;
      --grey-1: #3D3E3F;
      --grey-2: #B7B8B8;
      --grey-3: #29292A;
      --grey-4: #404141;
      --grey-5: #101112;
      --grey-6: #2F2A2C;
      --grey-7: #e7e7e7;
      --grey-8: #e6e6e6;
      --grey-9: #f7f7f7;
      --yellow-0: #ecb244;
      --blue-0: #335c9c;
      --blue-1: #008ce7;
      --orange-0: #fa6800;
      --orange-1: #f7931a;
      --white: #FFFFFF;
      --black: #000000;
      --error: #FF1A56;
      --transparent: transparent;
    }
    
    html, body, #root {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: var(--senary-color);
    }  
    
    *::selection {
      background-color: var(--primary-color);
      color: var(--white);
      text-shadow: none;
    }
    
    a {
      cursor: pointer;
    }
    
    * {
      box-sizing: border-box;
    }
  `}
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence>
    <Provider>
      <Component {...pageProps} />
      <GlobalStyles />
      <ResetStyles />
    </Provider>
    </AnimatePresence>
  );
};

export default MyApp;
