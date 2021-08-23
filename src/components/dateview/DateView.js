import { format } from "date-fns";

export default function DateView() {
  let nd = new Date();

  let currentDate = {
    day: format(nd, "dd"),
    dayDisplay: format(nd, "d"),
    month: format(nd, "MM"),
    monthDisplay: format(nd, "MMM"),
    year: format(nd, "y"),
    weekday: format(nd, "EEEE"),
  };

  return (
    <section className="mx-auto mt-10 flex justify-between">
      <div className="flex items-center justify-between">
        <div className="text-4xl sm:text-6xl">{currentDate.day}</div>
        <div className="flex flex-col justify-items-end justify-center items-center pl-1">
          <div className="text-sm sm:text-xl font-bold">
            {currentDate.monthDisplay}
          </div>
          <div className="text-sm sm:text-xl">{currentDate.year}</div>
        </div>
      </div>
      <div className="text-4xl sm:text-6xl">{currentDate.weekday}</div>
    </section>
  );
}
