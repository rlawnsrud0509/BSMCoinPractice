import {
  closeModalAnimation,
  showModalAnimation,
} from "@/style/animation/modalAnimation";
import { ModalLayoutProptypes } from "@/types/ui/ModalLayoutProptypes";
import React from "react";
import styled, { css } from "styled-components";

const ModalLayout = (options: ModalLayoutProptypes) => {
  return <Container {...options}>{options.children}</Container>;
};

export default ModalLayout;

const Container = styled.div<ModalLayoutProptypes>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ brightness = "100%", blur = "0px" }) => css`
    backdrop-filter: blur(${blur});
    backdrop-filter: brightness(${brightness});
  `};

  ${({ modalState }) => css`
    animation: 0.25s ease-in-out
      ${modalState ? closeModalAnimation : showModalAnimation} forwards;
  `}
`;
