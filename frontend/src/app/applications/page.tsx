import CareerFilter from "@/components/CareerFilter";
import CareerList from "@/components/CareerList";
import React from "react";

const ApplicationsPage = () => {
  return (
    <main className="w-4xl mx-auto mt-24">
      <div className="text-5xl font-bold">지원자 현황</div>
      <section className="flex gap-20 mt-10">
        <CareerFilter />
        <CareerList />
      </section>
    </main>
  );
};

export default ApplicationsPage;
