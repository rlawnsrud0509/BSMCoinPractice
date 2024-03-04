"use client";

import Color from "@/style/color";
import fonts from "@/style/font";
import { CSSProperties } from "react";
import styled from "styled-components";
import { Applayout } from "@/style/ui";

export default function Home() {
  return (
    <Applayout>
      <Container>
        <Paragraph color={Color.white}></Paragraph>
      </Container>
    </Applayout>
  );
}

const Container = styled.main`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  justify-content: center;
  align-items: center;

  background-color: ${Color.indigo};
`;

const Paragraph = styled.section<{ color: CSSProperties["color"] }>`
  ${fonts.Body}

  color: ${({ color }) => color}
`;
