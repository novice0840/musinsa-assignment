import CareerFilter from "@/components/CareerFilter";
import ApplicantionList from "./components/ApplicantionList";

const ApplicationsPage = () => {
  return (
    <main className="w-4xl mx-auto mt-24">
      <div className="text-5xl font-bold">지원자 현황</div>
      <section className="flex gap-20 mt-10">
        <CareerFilter />
        <ApplicantionList />
      </section>
    </main>
  );
};

export default ApplicationsPage;
