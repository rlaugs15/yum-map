export default function EatsHeader() {
  return (
    <header className="flex justify-between items-center w-full mb-2">
      <h2 className="text-lg font-bold">주변 맛집</h2>
      <select name="lang-filter" id="lang">
        <option value="distance">거리순</option>
        <option value="recommendation">추천순</option>
      </select>
    </header>
  );
}
