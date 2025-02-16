import EatsHeader from "./EatsHeader";
import EatsItem from "./EatsItem";

export default function NearbyEats() {
  return (
    <section className="bg-white w-full px-4 py-2">
      <EatsHeader />
      <section className="flex flex-col w-full">
        {Array.from({ length: 6 }).map((_, idx) => (
          <EatsItem key={idx} />
        ))}
      </section>
    </section>
  );
}
