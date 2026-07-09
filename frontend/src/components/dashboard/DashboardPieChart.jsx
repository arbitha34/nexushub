import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function DashboardPieChart({
  attendance,
  leaves,
}) {
  const data = {
    labels: [
      "Attendance",
      "Leaves",
    ],

    datasets: [
      {
        label: "Overview",

        data: [
          attendance,
          leaves,
        ],

        backgroundColor: [
          "#7b1fa2",
          "#e53935",
        ],

        borderColor: [
          "#ffffff",
          "#ffffff",
        ],

        borderWidth: 2,

        hoverOffset: 12,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {
        position: "bottom",
      },

      title: {
        display: true,
        text: "Attendance vs Leave",
        font: {
          size: 18,
          weight: "bold",
        },
      },

    },

    cutout: "65%",
  };

  return (
    <div
      style={{
        height: "350px",
      }}
    >
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
}

export default DashboardPieChart;