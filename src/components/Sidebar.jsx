import React from "react";
import { Button } from "./ui/button";

function Sidebar() {
  return (
    <div className="flex flex-col  p-2 bg-gray-200 h-screen gap-2">
      <Button className="" variant={"secondary"}>
        Dashboard
      </Button>
      <Button variant={"secondary"}>Settings</Button>
      <Button variant={"secondary"}>Logout</Button>
    </div>
  );
}

export default Sidebar;
