import { useState } from "react";

const test = Array.from("BLANK".repeat(120));
type COLOR = "BLANK" | "LIGHT" | "MEDIUM" | "DARK";
const colors: COLOR[] = ["BLANK", "LIGHT", "MEDIUM", "DARK"];

const HeatCell = () => {
  const [color, setColor] = useState<number>(0);

  return (
    <div className="w-[10px] h-[10px]">
      <div
        onClick={() => {
          setColor((c: number) => {
            return (c + 1) % 4;
          });
        }}
        className={`"w-full h-full rounded-sm border" ${colors[color] === "BLANK" ? "bg-gray-200 border-gray-300" : ""}, ${colors[color] === "LIGHT" ? "bg-green-200 border-green-500" : ""} ${colors[color] === "MEDIUM" ? "bg-green-500 border-green-700" : ""} ${colors[color] === "DARK" ? "bg-green-900 border-green-900" : ""}`}
      />
    </div>
  );
};

const Heatmap = () => {
  return (
    <div className="grid grid-rows-9 grid-flow-col gap-[0.22rem] overflow-x-scroll">
      {test.map(() => (
        <HeatCell />
      ))}
    </div>
  );
};

export default Heatmap;
