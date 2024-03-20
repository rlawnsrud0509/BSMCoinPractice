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
  Chart.defaults.color = Color.gray1400;
  Chart.defaults.borderColor = Color.gray300;

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
        borderColor: Color.gray1400,
        borderWidth: 3,
        data: dummy.filter((e) => e.name === name)[0]?.value,
        pointStyle: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: "transparent",
        },
      },
      y: {
        grid: {
          color: "transparent",
        },
      },
    },
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
      <Line width="50%" height="20%" data={chartData} options={chartOptions} />
    </Container>
  );
};

export default StockgraphBox;

const Container = styled.section`
  width: 100%;
  height: fit-content;

  position: relative;

  display: flex;

  border-radius: 0.5rem;

  background-color: ${Color.gray300};
  padding: 1rem;
`;
