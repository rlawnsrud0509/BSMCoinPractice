"use client";

import GlobalStyle from "@/style/global";
import Header from "../common/header";
import StyledComponentsRegistry from "@/lib/registry";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <Header />
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  );
};

export default Provider;
