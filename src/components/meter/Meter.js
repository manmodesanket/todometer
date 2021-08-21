import { useAppContext } from "../../context/AppContext";

export default function Meter() {
  const { completedPercentage, pausedPercentage } = useAppContext();
  return (
    <section className="h-4 mt-10 mx-auto flex rounded bg-gray-400">
      <div
        className="h-full bg-green-400 transition-all duration-500"
        style={{
          width: completedPercentage ? `${completedPercentage * 100}%` : 0,
        }}
      ></div>
      <div
        className="h-full bg-yellow-400 transition-all duration-500"
        style={{
          width: pausedPercentage ? `${pausedPercentage * 100}%` : 0,
        }}
      ></div>
    </section>
  );
}
