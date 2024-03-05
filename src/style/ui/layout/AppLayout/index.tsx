import React from "react";
import styled from "styled-components";
import Color from "@/style/color";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default AppLayout;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;

  background-color: ${Color.indigoBase};
`;
