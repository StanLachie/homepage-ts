import React, { useEffect, useState } from "react";

function Clock() {
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
    <div className="flex flex-col justify-center items-center p-12">
      <p className="text-8xl" title={`The time is currently: ${time}`}>{time}</p>
      <div className="w-52 h-1 mt-1 bg-gray-800"></div>
      <p className="text-5xl font-semibold" title={`The date is currently: ${date}`}>{date}</p>
    </div>
  );
}

export default Clock;
