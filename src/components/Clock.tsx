import React, { FC, useEffect, useState } from "react";

interface ClockProps {
  darkMode: boolean;
}

const Clock: FC<ClockProps> = (props) => {
  const [dateTime, setDateTime] = useState(new Date());
  const date = dateTime.toLocaleDateString("en-GB");
  const time = dateTime.toLocaleString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    setTimeout(() => setDateTime(new Date()), 10000);
  });

  return (
    <div
      className={`flex flex-col justify-center items-center p-12 ${
        props.darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <p className="text-8xl" title={`The time is currently: ${time}`}>
        {time}
      </p>
      <div
        className={`w-52 h-1 mt-1 ${
          props.darkMode ? "bg-gray-100" : "bg-gray-900"
        }`}
      ></div>
      <p
        className="text-5xl font-semibold"
        title={`The date is currently: ${date}`}
      >
        {date}
      </p>
    </div>
  );
};

export default Clock;
