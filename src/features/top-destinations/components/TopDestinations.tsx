import { DestinationGrid } from "./DestinationGrid";

export function TopDestinations() {
  return (
    <section className="mt-[8.5rem] md:mt-[5rem]">
      <div className="mb-16">
        <div>
          <h2 className="text-[2.5rem] font-normal text-[#1d293f]">
            Top destinations
          </h2>
          <p className="mt-4 text-base font-normal text-[#546179]">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </p>
        </div>
      </div>

      <DestinationGrid />
    </section>
  );
}
