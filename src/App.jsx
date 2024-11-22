import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Navbar } from "./components/Navbar";
import Tool from "./components/Tool";
import Footer from "./components/Footer";
import Text from "./components/Text";

const mockData = [
  { subject: "Math", mockScore: 85, averageScore: 75 },
  { subject: "Science", mockScore: 90, averageScore: 80 },
  { subject: "English", mockScore: 70, averageScore: 65 },
  { subject: "History", mockScore: 75, averageScore: 70 },
  { subject: "Geography", mockScore: 80, averageScore: 72 },
  { subject: "Mth", mockScore: 85, averageScore: 75 },
  { subject: "Sce", mockScore: 90, averageScore: 80 },
  { subject: "Elish", mockScore: 70, averageScore: 65 },
  { subject: "Hry", mockScore: 75, averageScore: 70 },
  { subject: "Ghy", mockScore: 80, averageScore: 72 },
];

function App() {
  return (
    <>
      <Navbar />
      <Tool />
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-12 text-xl md:text-2xl max-w-5xl mx-auto my-36">
        <Text />
      </div>
      <Footer />

      <div className="p-6 flex bg-blue-300 font-semibold">
        <div className="left p-6 mt-10">
          <div className="text">wpm</div>
          <div className="num text-2xl">47</div>
          <div className="text">acc</div>
          <div className="num font-semibold text-2xl">87%</div>
        </div>
        <div className="w-full h-56">
          <h1 className="text-2xl font-bold text-center mb-4">
            Mock Test Result
          </h1>
          <ResponsiveContainer>
            <LineChart
              data={mockData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="subject"
                label={{
                  value: "Subjects",
                  position: "insideBottom",
                  offset: -10,
                }}
              />
              <YAxis
                className="text-xs "
                label={{
                  value: "Words per Minute",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="mockScore"
                stroke="#4A90E2"
                strokeWidth={2}
                activeDot={{ r: 8 }}
                name="Mock Score"
              />
              <Line
                type="monotone"
                dataKey="averageScore"
                stroke="#50E3C2"
                strokeWidth={2}
                name="Class Average"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default App;
