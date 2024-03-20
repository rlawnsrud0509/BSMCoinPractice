import Color from "@/style/color";
import fonts from "@/style/font";
import { ImageRenderer, Row } from "@/style/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      {!(pathname === "/stock") && (
        <Container>
          <Row gap="3rem">
            <Link href="/">
              <ImageRenderer
                width="2rem"
                height="2rem"
                src="/image/logo/logo.png"
              />
            </Link>
          </Row>
          <LoginButton href={"/"}>시작하기</LoginButton>
        </Container>
      )}
    </>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 4rem;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  background-color: rgba(0, 0, 0, 0);
  color: ${Color.white};

  backdrop-filter: blur(2px);

  z-index: 5;
`;

const StyledLink = styled(Link)`
  width: fit-content;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  background-color: ${Color.indigoBase};

  transition: 0.25s ease-in-out;
  cursor: pointer;

  padding: 0 1rem;

  ${fonts.Route}

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const LoginButton = styled(Link)`
  width: fit-content;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  background-color: ${Color.white};
  color: ${Color.black};

  transition: 0.25s ease-in-out;
  cursor: pointer;

  padding: 0 1rem;

  ${fonts.Route}

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
