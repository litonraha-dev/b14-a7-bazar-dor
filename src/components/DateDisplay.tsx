"use client";

import { useEffect, useState } from "react";

const DateDisplay = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      })
    );
  }, []);

  return (
    <h2 className="mb-3 inline-block rounded-full bg-green-200 p-2 font-bold text-green-700">
      {date}
    </h2>
  );
};

export default DateDisplay;