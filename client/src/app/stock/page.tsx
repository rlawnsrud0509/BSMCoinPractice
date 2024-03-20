"use client";

import { selectedStockAtom } from "@/store";
import Color from "@/style/color";
import { AppLayout, Text } from "@/style/ui";
import { useAtom } from "jotai/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import dummy from "@/dummy.json";
import StockgraphBox from "@/components/stockgraphBox";
import LeftSidebar from "@/components/common/leftSidebar";
import StockTradeBox from "@/components/stockTradeBox";

const StockPage = () => {
  const [stockName, setStockname] = useAtom(selectedStockAtom);

  useEffect(() => {
    setStockname(dummy[0].name);
  }, []);

  return (
    <AppLayout color={Color.indigoDark}>
      <LeftSidebar />
      <Container>
        <StockDetailContainer>
          <Text width="100%" textAlign="left" fontType="Callout">
            {stockName}
          </Text>
          <StockgraphBox name={stockName} />
        </StockDetailContainer>
        <StockTradeBox name={stockName} />
      </Container>
    </AppLayout>
  );
};

export default StockPage;

const Container = styled.section`
  width: 100%;
  min-height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
`;

const StockDetailContainer = styled.section`
  flex: 1 1 0;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  padding: 1.5rem;
`;
