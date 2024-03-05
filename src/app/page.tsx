"use client";

import Color from "@/style/color";
import fonts from "@/style/font";
import { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";
import { Applayout, Column, ImageRenderer, Row } from "@/style/ui";
import ScrollAnimationContainer from "@/components/common/scrollAnimationContainer";

export default function Home() {
  return (
    <Applayout>
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
        <ScrollAnimationContainer>
          <Column gap="2rem">
            <Paragraph color={Color.white}>왜 만들었을까요?</Paragraph>
            <Row width="100%" justifyContent="justyfy-between">
              <ParagraphBox>어쩌구저쩌구</ParagraphBox>
            </Row>
          </Column>
        </ScrollAnimationContainer>
      </Container>
      <BackgroundImage />
    </Applayout>
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

  opacity: 0.3;
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

const ParagraphBox = styled.section`
  width: 10rem;
  height: 10rem;

  border-radius: 1rem;
  border: 0.125rem solid ${Color.indigo};
  background-color: ${Color.indigoBase};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  ${fonts.HeadLine};
`;
