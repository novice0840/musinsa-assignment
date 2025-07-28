import CareerFilter from "@/components/CareerFilter";
import CareerList from "@/components/CareerList";

export default function Home() {
  return (
    <main className="w-4xl mx-auto mt-24">
      <div className="text-5xl font-bold">TEAM MUSINSA</div>
      <div className="text-5xl font-bold">Careers</div>
      <section className="flex gap-20 mt-10">
        <CareerFilter />
        <CareerList />
      </section>
    </main>
  );
}
