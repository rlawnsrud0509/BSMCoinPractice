import Color from "@/style/color";
import React from "react";
import styled from "styled-components";
import ProfileBox from "./profileBox";
import Sidebarmenu from "./menu";

const Sidebar = () => {
  return (
    <Container>
      <SidebarHeader>
        <ProfileBox />
      </SidebarHeader>
      <Sidebarmenu />
      {/* <CloseSidebarButton>{"<"}</CloseSidebarButton> */}
    </Container>
  );
};

export default Sidebar;

const Container = styled.section`
  width: 20rem;
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  padding: 1.5rem;
  box-sizing: border-box;

  background-color: ${Color.white};
  z-index: 2;
`;

// const CloseSidebarButton = styled.button`
//   width: 1rem;
//   height: 4rem;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   position: absolute;
//   top: 50%;
//   right: -1.125rem;

//   background-color: ${Color.white};
//   border: none;

//   transform: translate(0%, -50%);
//   cursor: pointer;
//   z-index: 1;

//   &::before {
//     content: "";

//     width: 0;
//     height: 0;

//     border-top: 0.5rem solid ${Color.indigoBase};
//     border-left: 0.5rem solid transparent;
//     border-right: 0.5rem solid ${Color.indigoBase};
//     border-bottom: 0.5rem solid transparent;

//     position: absolute;
//     left: 0;
//     top: 0;
//   }

//   &::after {
//     content: "";

//     width: 0;
//     height: 0;

//     border-top: 0.5rem solid transparent;
//     border-left: 0.5rem solid transparent;
//     border-right: 0.5rem solid ${Color.indigoBase};
//     border-bottom: 0.5rem solid ${Color.indigoBase};

//     position: absolute;
//     left: 0;
//     bottom: 0;
//   }
// `;

const SidebarHeader = styled.section`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
`;
