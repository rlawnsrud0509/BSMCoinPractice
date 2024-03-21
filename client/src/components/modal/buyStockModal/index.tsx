import { closeModalAnimation, showModalAnimation } from "@/style/animation/modalAnimation";
import Color from "@/style/color";
import CrossIcon from "@/style/svg/crossline";
import ModalLayout from "@/style/ui/layout/modalLayout";
import { BuyStockModalProptypes } from "@/types/components/BuyStockModalProptypes";
import React from "react";
import styled, { css } from "styled-components";

const BuyStockModal = ({ state, closeModal }: BuyStockModalProptypes) => {
  if (state.state)
    return (
      <ModalLayout brightness="60%" animationState={state.animationState}>
        <Container animationState={state.animationState}>
          <CloseModalButton onClick={closeModal}>
            <CrossIcon width={1} height={1} />
          </CloseModalButton>
        </Container>
      </ModalLayout>
    );
  else return;
};

export default BuyStockModal;

const Container = styled.section<{ animationState: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;

  width: 50rem;
  height: 30rem;

  border-radius: 0.5rem;
  box-shadow: 0px 0px 1rem ${Color.gray100};

  background-color: ${Color.gray300};

  ${({ animationState }) => css`
    animation: 0.25s ease-in-out ${animationState ? showModalAnimation : closeModalAnimation}
      forwards;
  `}
`;

const CloseModalButton = styled.button`
  width: fit-content;
  height: fit-content;

  position: absolute;

  right: 1rem;
  top: 1rem;

  padding: 0.25rem;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;
