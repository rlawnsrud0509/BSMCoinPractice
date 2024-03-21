import { Column, Text } from "@/style/ui";
import { ConvertNumberToFormat } from "@/utils/convertNumberToFormat";
import React from "react";
import styled from "styled-components";

const DetailTradeInfo = () => {
  return (
    <Container>
      <Column height="100%" justifyContent="space-between">
        <Text fontType="SubHead">거래량</Text>
        <Text fontType="SubHead">{ConvertNumberToFormat(4991)}</Text>
      </Column>
      <Column height="100%" justifyContent="space-between">
        <Text fontType="SubHead">시가총액</Text>
        <Text fontType="SubHead">{ConvertNumberToFormat(4582382)}</Text>
      </Column>
      <Column height="100%" justifyContent="space-between">
        <Text fontType="SubHead">고가</Text>
        <Text fontType="SubHead">{ConvertNumberToFormat(32583)}</Text>
      </Column>
      <Column height="100%" justifyContent="space-between">
        <Text fontType="SubHead">저가</Text>
        <Text fontType="SubHead">{ConvertNumberToFormat(29304)}</Text>
      </Column>
    </Container>
  );
};

export default DetailTradeInfo;

const Container = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  gap: 4rem;

  padding: 1.5rem 0;
`;
