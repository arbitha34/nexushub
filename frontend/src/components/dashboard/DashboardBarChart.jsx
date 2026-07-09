import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardBarChart({
  employees,
  projects,
  tasks,
}) {
  const data = {
    labels: ["Employees", "Projects", "Tasks"],

    datasets: [
      {
        label: "Total Records",

        data: [
          employees,
          projects,
          tasks,
        ],

        backgroundColor: [
          "#1976d2",
          "#43a047",
          "#fb8c00",
        ],

        borderRadius: 12,
        borderSkipped: false,
        maxBarThickness: 70,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Organization Overview",
        font: {
          size: 18,
          weight: "bold",
        },
      },

      tooltip: {
        enabled: true,
      },

    },

    scales: {

      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },

    },

  };

  return (
    <div
      style={{
        height: "350px",
      }}
    >
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}

export default DashboardBarChart;