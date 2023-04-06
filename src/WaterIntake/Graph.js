import React from "react";
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";

function Graph() {
  return (
    <>
      <div class="font-bold uppercase text-[#39393] p-4">
        water intake schedule
      </div>
      <div class="px-4 py-2 flex items-center gap-4 flex-wrap">
        <div>
          <select name="user" class="bg-white border rounded p-2">
            <option value="default">Select User</option>
            <option value="user2">user2</option>
            <option value="user3">user3</option>
            <option value="user4">user4</option>
            <option value="user5">user5</option>
          </select>
        </div>
        <div class="flex items-center gap-4 flex-wrap">
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex flex-col">
              <label for="start-date">Start Date:</label>
              <input
                type="date"
                name="start-date"
                id="start-date"
                class="border rounded p-2"
              />
            </div>
            <div class="flex flex-col">
              <label for="end-date">End Date:</label>
              <input
                type="date"
                name="end-date"
                id="end-date"
                class="border rounded p-2"
              />
            </div>
          </div>
          <button class="text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded py-2 px-4 uppercase font-semibold">
            graph
          </button>
        </div>
      </div>
      <div class="w-[700px] h-[400px]">
        <canvas class="" id="chartLine"></canvas>
      </div>

      <LineChart />
    </>
  );
}

/*graph function */

const LineChart = () => {
  const labels = [
    "2022-03-17",
    "2022-03-18",
    "2022-03-19",
    "2022-03-20",
    "2022-03-21",
    "2022-03-22",
    "2022-03-23",
  ];

  const [chart, setChart] = useState(null);

  useEffect(() => {
    const data = {
      labels: labels,
      datasets: [
        {
          label: "assigned",
          backgroundColor: "hsl(252, 82.9%, 67.8%)",
          borderColor: "hsl(252, 82.9%, 67.8%)",
          data: [0, 40, 120, 170, 200, 230, 250],
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };

    const ctx = document.getElementById("chartLine").getContext("2d");
    const newChart = new Chart(ctx, config);

    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, []);

  return <canvas id="chartLine" />;
};

export default Graph;
