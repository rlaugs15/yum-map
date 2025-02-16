"use client";
import TapNavigation from "./TapNavigation";

export default function MainHeader() {
  return (
    <header className="w-full h-[64px] flex justify-between items-center px-3 bg-white border-b">
      <TapNavigation />
      <section>
        <form action="">
          <input type="text" placeholder="맛집 또는 레시피 검색" />
        </form>
      </section>
    </header>
  );
}
