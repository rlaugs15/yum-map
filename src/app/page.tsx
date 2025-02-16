import KakaoMap from "@/components/KakaoMap";

export default function Home() {
  return (
    <div>
      <section className="w-full grid grid-cols-3 gap-4">
        <KakaoMap classname="col-span-2" />
      </section>
    </div>
  );
}
