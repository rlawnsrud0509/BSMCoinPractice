import Color from "@/style/color";
import { Button, Column, Row, Text } from "@/style/ui";
import React, { useState } from "react";
import styled from "styled-components";
import dummy from "@/dummy.json";
import { ConvertNumberToFormat } from "@/utils/convertNumberToFormat";
import { Triangle } from "@/style/svg";
import DetailTradeInfo from "./detailTradeinfo";

const StockTradeBox = ({ name }: { name: string }) => {
  const [currentValue, setCurrentValue] = useState(31243);
  const [forwardValue, setForwardValue] = useState(34932);

  //증감률 = (현재값 - 이전값) / 이전값 * 100
  const changedRate = Math.floor(((currentValue - forwardValue) / forwardValue) * 10000) / 100;

  const stockColor = changedRate === 0 ? Color.white : changedRate > 0 ? Color.red : Color.blue;
  const degree = changedRate > 0 ? 0 : 180;

  // useDidMountEffect(() => {
  //   setCurrentValue(dummy.filter((e) => e.name === name)[0].value.slice(-1)[0]);

  //   setForwardValue(dummy.filter((e) => e.name === name)[0].value.slice(-2)[0]);
  // }, [name]);

  return (
    <Container>
      <TradeBox>
        <Column height="100%" width="30%" justifyContent="space-between" alignItems="start">
          <Row gap="1rem" width="100%">
            <Text width="30%" fontType="HeadLine">
              {name}
            </Text>
            <Text fontType="HeadLine" color={stockColor}>
              {ConvertNumberToFormat(currentValue - forwardValue)}
              <Triangle width={2} height={2} backgroundColor={stockColor} degree={degree} />
            </Text>
            <Text fontType="Callout" color={stockColor}>
              ({changedRate} %)
            </Text>
          </Row>
          <Text fontType="Title1" color={stockColor}>
            {ConvertNumberToFormat(currentValue)} P
          </Text>
        </Column>
        <DetailTradeInfo />
        <Column height="100%" justifyContent="space-between">
          <Button width="10rem" padding="1rem" buttonType="Buy">
            매수
          </Button>
          <Button width="10rem" padding="1rem" buttonType="Sell">
            매도
          </Button>
        </Column>
      </TradeBox>
    </Container>
  );
};

export default StockTradeBox;

const Container = styled.section`
  flex: 1 1 0;

  display: flex;

  position: relative;

  padding: 1.5rem 1.5rem 1.5rem 0;
  background-color: ${Color.gray300};
`;

const TradeBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  gap: 0.5rem;
  background-color: ${Color.gray200};
  border-radius: 0.5rem;

  padding: 1.5rem;
`;
