import Color from "@/style/color";
import fonts from "@/style/font";
import { Column, Row, Text } from "@/style/ui";
import ImageRenderer from "@/style/ui/imageRenderer";
import React from "react";
import styled from "styled-components";

const ProfileBox = () => {
  return (
    <Container>
      <ProfileImage
        width="5rem"
        height="5rem"
        src={`/image/mockup/Profile_Face_${1}.png`}
      />
      <Column height="5rem" justifyContent="space-between" alignItems="start">
        <Row alignItems="end" gap="0.25rem">
          <Text fontType="SubHead">김준경</Text>
          <Text fontType="ReallySmall">투자자님</Text>
        </Row>
        <Column gap={0} alignItems="start">
          <Text textAlign="left" fontType="MegaSmall">
            보유 Pang
          </Text>
          <Text textAlign="left" fontType="Small">
            20,000,000 P
          </Text>
        </Column>
      </Column>
      <ChangeInfoButton>정보 수정</ChangeInfoButton>
    </Container>
  );
};

export default ProfileBox;

const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  border-radius: 0.5rem;

  color: ${Color.white};
  background-color: ${Color.gray1400};
`;

const ChangeInfoButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1.75rem;

  ${fonts.MegaSmall};
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  color: black;
  opacity: 0.5;

  transition: 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const ProfileImage = styled(ImageRenderer)`
  border-radius: 50%;
`;
