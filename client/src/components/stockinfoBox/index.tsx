import React from "react";
import styled, { CSSProperties } from "styled-components";
import { Row, Text } from "@/style/ui";
import fonts from "@/style/font";
import { Dashline, Triangle } from "@/style/svg";
import { StockinfoBoxProptypes } from "@/types/components/StockinfoBoxProptypes";
import Color from "@/style/color";
import { useSetAtom } from "jotai";
import { selectedStockAtom } from "@/store";
import { ConvertNumberToFormat } from "@/utils/convertNumberToFormat";

const StockinfoBox = ({
  name,
  currentValue,
  changedValue,
}: StockinfoBoxProptypes) => {
  const textColor =
    changedValue == 0 ? "white" : changedValue > 0 ? "red" : "blue";
  const degree = changedValue > 0 ? 0 : 180;

  const setStockname = useSetAtom(selectedStockAtom);

  return (
    <Container background={Color[textColor]} onClick={() => setStockname(name)}>
      <Text width="5rem" textAlign="left" ellipsis fontType="Small">
        {name}
      </Text>
      <Row width="100%" fontType="Small">
        {ConvertNumberToFormat(currentValue)}
      </Row>
      <Row width="100%" justifyContent="end" gap={"0.5rem"}>
        <Text fontType="Small" color={Color[textColor]}>
          {ConvertNumberToFormat(changedValue)}
        </Text>
        {changedValue !== 0 ? (
          <Triangle
            width={1}
            height={1}
            backgroundColor={Color[textColor]}
            degree={degree}
          />
        ) : (
          <Dashline width={1} height={1} backgroundColor={Color.white} />
        )}
      </Row>
    </Container>
  );
};

export default StockinfoBox;

const Container = styled.div<{ background: CSSProperties["backgroundColor"] }>`
  width: 16.875rem;
  height: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  position: relative;

  padding: 1.5rem;

  ${fonts.Caption};
  color: white;
  background-color: ${({ background }) => background + "25"};
  cursor: pointer;

  transition: ease-in-out 0.15s;

  &:hover {
    background-color: ${({ background }) => background + "50"};
    transform: scale(1.02);
  }
`;
