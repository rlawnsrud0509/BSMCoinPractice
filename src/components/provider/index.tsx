import GlobalStyle from "@/style/global";
import { Container } from "react-dom";
import styled from "styled-components";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Provider;
