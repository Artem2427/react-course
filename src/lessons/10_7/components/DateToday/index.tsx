import { ChangeEvent, FC } from "react";

interface DateTodayProps {
  today: Date;
  newDate: (date: Date) => void;
}

const DateToday: FC<DateTodayProps> = ({ today, newDate }) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let minYear = 2019;

  const listYears = [];

  let i = 0;

  while (minYear <= today.getFullYear() + 3) {
    listYears.push(minYear);
    minYear += 1;
    i++;
  }

  const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    newDate(new Date(+e.target.value, today.getMonth(), today.getDate()));
  };

  return (
    <div>
      <span>{month[today.getMonth()]} </span>
      <select value={today.getFullYear()} onChange={handleChangeYear}>
        {listYears.map((year, i) => (
          <option key={i}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default DateToday;
