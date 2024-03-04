"use client";

import { createGlobalStyle } from "styled-components";
import WantedSans from "@/style/global/font/WantedSansVariable.woff2";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: "WantedSans";
        font-style: normal;
        src: url(${WantedSans}) format('ttf');
    }
`;

export default GlobalStyle;
