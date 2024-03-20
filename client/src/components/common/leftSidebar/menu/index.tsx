import StockinfoBox from "@/components/stockinfoBox";
import Color from "@/style/color";
import fonts from "@/style/font";
import React from "react";
import styled from "styled-components";
import dummy from "@/dummy.json";

const Sidebarmenu = () => {
  return (
    <Container>
      {dummy.map((e, i) => {
        return (
          <StockinfoBox
            key={i}
            name={e.name}
            currentValue={e.value[e.value.length - 1]}
            changedValue={
              e.value[e.value.length - 1] - e.value[e.value.length - 2]
            }
          />
        );
      })}
    </Container>
  );
};

export default Sidebarmenu;

const Container = styled.section`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  position: relative;
  border-radius: 0.5rem;
  background-color: ${Color.gray200};

  &::before {
    content: "나의 주식";
    position: absolute;
    ${fonts.Small};
    color: white;

    top: -1.5rem;
  }
`;
