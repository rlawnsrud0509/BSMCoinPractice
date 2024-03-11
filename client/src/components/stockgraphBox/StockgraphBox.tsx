import React from "react";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Chart,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Color from "@/style/color";
import { Container } from ".";

export const StockgraphBox = ({ name }: { name: string }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ZoomPlugin
  );

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
    ],
    datasets: [
      {
        label: "qw",
        borderColor: Color.blue,
        borderWidth: 2,
        data: [
          10, 12, 5, 73, 24, 36, 12, 5, 73, 24, 36, 12, 5, 73, 24, 36, 12, 5,
          73, 24, 36, 12, 5, 73, 24, 36, 12, 5, 73, 24, 36,
        ],
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
