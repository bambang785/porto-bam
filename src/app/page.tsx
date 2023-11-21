import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";

export default function Home() {
  return (
    <main className=" min-h-screen  items-center justify-between">
      <div></div>
      <Navbar />
      <Dashboard />
    </main>
  );
}
