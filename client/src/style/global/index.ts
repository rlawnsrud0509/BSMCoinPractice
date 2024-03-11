"use client";

import { createGlobalStyle } from "styled-components";
import Pretendard from "@/style/global/font/PretendardVariable.woff2";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        outline: none;
    }

    input {
        outline: none;
    }

    a {
        text-decoration: none;
        color: white;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    @font-face {
        font-family: "Pretendard";
        font-style: normal;
        src: url(${Pretendard}) format('ttf');
    }
`;

export default GlobalStyle;
