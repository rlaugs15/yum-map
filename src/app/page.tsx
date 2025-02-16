import KakaoMap from "@/components/KakaoMap";
import NearbyEats from "@/features/home/NearbyEats/NearbyEats";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <section className="w-full grid web:grid-cols-3 mobile:grid-cols-1 gap-4">
        <KakaoMap classname="web:col-span-2 mobile:h-[300px]" />
        <NearbyEats />
      </section>
      <section className="bg-white w-full px-4 py-2">
        <header>
          <h2 className="text-lg font-bold">추천 레시피</h2>
        </header>
      </section>
    </div>
  );
}
