"use client";

import Color from "@/style/color";
import fonts from "@/style/font";
import { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";
import { AppLayout, Column, ImageRenderer, Row } from "@/style/ui";
import ScrollAnimationContainer from "@/components/common/scrollAnimationContainer";
import Link from "next/link";

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Column alignItems="center" width="70%">
          <Paragraph color={Color.white}>
            BSM 모의주식투자에
            <br /> 오신걸 환영해요.
          </Paragraph>
          <ImageRenderer
            src="/image/mockup/Waving Hand.png"
            width="15rem"
            height="15rem"
          />
        </Column>

        <Column gap="2rem" alignItems="center">
          <ScrollAnimationContainer>
            <Paragraph color={Color.white}>
              해보고 싶었던 주식 투자,
              <br />
              가상의 돈으로 직접 체험해봐요.
            </Paragraph>
          </ScrollAnimationContainer>
          <ImageRenderer
            src="/image/mockup/Beaming Face.png"
            width="13rem"
            height="13rem"
          />
        </Column>
        <Column gap="6rem" alignItems="center">
          <ScrollAnimationContainer>
            <Paragraph color={Color.white}>
              BSM 모의주식투자와
              <br /> 주식투자를 경험해볼까요?
            </Paragraph>
          </ScrollAnimationContainer>
          <StartButton href="/main">시작하기</StartButton>
        </Column>
      </Container>
      <BackgroundImage />
    </AppLayout>
  );
}

const showElements = keyframes`
    from { opacity: 0; transform: translateY(3%); z-index: 2; };
    to { opacity: 1; transform: translateY(0%); z-index: 2; };
  `;

const Container = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 25rem;

  align-items: center;
  overflow-x: hidden;

  padding: 10rem 0;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  top: 0;
  left: 0;
  background-image: url("/image/mockup/backgroundImage.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.2;
  z-index: 1;
`;

const Paragraph = styled.section<{ color: CSSProperties["color"] }>`
  ${fonts.LargeTitle}
  text-align: center;

  color: ${({ color }) => color};

  opacity: 0;
  animation: ${showElements} 0.5s ease-in-out 1.5s forwards;

  z-index: 2;
`;

const StartButton = styled(Link)`
  width: 10rem;
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  ${fonts.Route}
  background-color: ${Color.white};
  color: ${Color.indigoBase};

  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  z-index: 2;

  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: translateY(-3%);
    box-shadow: 0px 0.2rem 0.5rem black;
  }
`;
