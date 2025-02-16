import KakaoMap from "@/components/KakaoMap";
import NearbyEats from "@/features/home/NearbyEats";

export default function Home() {
  return (
    <div>
      <section className="w-full grid grid-cols-3 gap-4">
        <KakaoMap classname="col-span-2" />
        <NearbyEats />
      </section>
    </div>
  );
}
