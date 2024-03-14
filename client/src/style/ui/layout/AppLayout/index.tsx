import React from "react";
import styled from "styled-components";
import Color from "@/style/color";
import { AppLayoutProptypes } from "@/types/ui/AppLayoutProptypes";
import Sidebar from "@/components/common/leftSidebar";

const AppLayout = ({
  children,
  color = Color.indigoBase,
}: AppLayoutProptypes) => {
  return (
    <Container style={{ backgroundColor: color }}>
      <Sidebar />
      {children}
    </Container>
  );
};

export default AppLayout;

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  position: relative;

  display: flex;
  justify-content: center;
`;
