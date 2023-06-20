import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type VerticalChartProps = {
  data: any;
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      // position: "top",
    },
    title: {
      display: false,
      text: "Устройства",
    },
  },
};

export const VerticalChart = ({ data }: VerticalChartProps) => {
  return <Bar options={options} data={data} />;
};
