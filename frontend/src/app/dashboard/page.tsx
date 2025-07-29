import React from "react";
import { JobChart } from "./components/JobChart";
import CareerFilter from "@/components/CareerFilter";

const DashboardPage = () => {
  return (
    <main className="w-6xl mx-auto mt-24">
      <div className="text-5xl font-bold">대시 보드</div>
      <section className="flex gap-20 mt-10">
        <CareerFilter />
        <JobChart />
      </section>
    </main>
  );
};

export default DashboardPage;
