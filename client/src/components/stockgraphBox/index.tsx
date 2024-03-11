import React from "react";
import styled from "styled-components";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Chart,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Color from "@/style/color";
import dummy from "@/dummy.json";

const StockgraphBox = ({ name }: { name: string }) => {
  Chart.register(CategoryScale, LinearScale, PointElement, LineElement);
  Chart.defaults.color = Color.white;
  Chart.defaults.borderColor = Color.indigoBase;

  const chartData = {
    labels: [
      "일",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
      "사",
      "오",
      "육",
      "이",
      "삼",
    ],
    datasets: [
      {
        label: "",
        borderColor: Color.white,
        borderWidth: 2,
        data: dummy.filter((e) => e.name === name)[0]?.value,
        pointStyle: false,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
        },
      },
    },
  };

  return (
    <Container>
      <Line data={chartData} options={chartOptions} />
    </Container>
  );
};

export default StockgraphBox;

const Container = styled.section`
  width: 100%;
  height: fit-content;

  position: relative;

  border-radius: 0.5rem;

  background-color: ${Color.indigoBase};
  padding: 1rem;
`;
