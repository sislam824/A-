import React from "react";
import { Calendar } from "@/components/ui/calendar";

function Dashboard() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="flex gap-5 p-2">
      <div className="w-[78%] flex flex-col gap-2">
        <div className="flex justify-between gap-3">
          <div className="hover:shadow-lg border h-[200px] rounded-lg w-full bg-slate-50"></div>
          <div className="hover:shadow-lg border h-[200px] rounded-lg w-full bg-slate-50"></div>
          <div className="hover:shadow-lg border h-[200px] rounded-lg w-full bg-slate-50"></div>
          <div className="hover:shadow-lg border h-[200px] rounded-lg w-full bg-slate-50"></div>
          <div className="hover:shadow-lg border h-[200px] rounded-lg w-full bg-slate-50"></div>
        </div>
        <div className="hover:shadow-lg flex-1 border h-auto rounded-lg w-full bg-slate-50"></div>
      </div>
      <div className="hover:shadow-lg border  rounded-lg  ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </div>
  );
}

export default Dashboard;
