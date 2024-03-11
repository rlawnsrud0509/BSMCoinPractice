"use client";

import Sidebar from "@/components/sidebar";
import { selectedStockAtom } from "@/store";
import Color from "@/style/color";
import { AppLayout, Text } from "@/style/ui";
import { useAtom } from "jotai/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import dummy from "@/dummy.json";
import StockgraphBox from "@/components/stockgraphBox";

const Main = () => {
  const [stockName, setStockname] = useAtom(selectedStockAtom);

  useEffect(() => {
    setStockname(dummy[0].name);
  }, []);

  return (
    <AppLayout color={Color.indigoDark}>
      <Container>
        <Sidebar />
        <StockDetailContainer>
          <Text fontType="Callout">{stockName}</Text>
          <StockgraphBox name={stockName} />
        </StockDetailContainer>
      </Container>
    </AppLayout>
  );
};

export default Main;

const Container = styled.section`
  width: 100%;
  min-height: 100%;

  position: relative;

  display: flex;
`;

const StockDetailContainer = styled.section`
  flex: 1 1 0;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem;
`;
