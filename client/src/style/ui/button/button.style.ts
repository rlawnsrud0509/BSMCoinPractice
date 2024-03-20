import Color from "@/style/color";
import fonts from "@/style/font";
import { css } from "styled-components";

export const buttonStyle = {
  Custom: css`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border: none;
    border-radius: 0.15rem;

    padding: 0.5rem;
    background-color: ${Color.white};
    color: ${Color.indigoBase};
  `,
  Submit: css`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border: none;
    border-radius: 0.15rem;

    padding: 0.5rem;
    background-color: ${Color.white};
    color: ${Color.indigoBase};
  `,
  Buy: css`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border: none;
    border-radius: 0.15rem;

    padding: 0.5rem;
    background-color: ${Color.red};
    color: ${Color.white};
    ${fonts.Small}
  `,
  Sell: css`
    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    border: none;
    border-radius: 0.15rem;

    padding: 0.5rem;
    background-color: ${Color.blue};
    color: ${Color.white};
    ${fonts.Small}
  `,
};
