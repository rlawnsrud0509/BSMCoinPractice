import React from "react";
import styled from "styled-components";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default AppLayout;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;

  padding: 10rem 0;
`;
