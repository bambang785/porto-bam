import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div></div>
      <Navbar />
      <Dashboard />
    </main>
  );
}
