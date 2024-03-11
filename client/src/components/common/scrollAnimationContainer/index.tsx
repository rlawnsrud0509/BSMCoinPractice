import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import styled, { css, keyframes } from "styled-components";

const ScrollAnimationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <Container isinViewport={isInViewport} ref={ref}>
      {children}
    </Container>
  );
};

export default ScrollAnimationContainer;

const scrollShow = keyframes`
    from { opacity: 0; transform: translateY(3%); z-index: 2 };
    to { opacity: 1; transform: translateY(0%); z-index: 2 };
  `;
const scrollHide = keyframes`
    from { opacity: 1; transform: translateY(0%); z-index: 2 };
    to { opacity: 0; transform: translateY(3%); z-index: 2 };
  `;

const Container = styled.div<{ isinViewport: boolean }>`
  ${({ isinViewport }) =>
    isinViewport
      ? css`
          animation: ${scrollShow} 0.5s ease-in-out forwards;
        `
      : css`
          animation: ${scrollHide} 0.5s ease-in-out forwards;
        `};
`;
