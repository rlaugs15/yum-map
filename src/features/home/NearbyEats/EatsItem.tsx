export default function EatsItem() {
  return (
    <article className="w-full flex justify-between items-center px-2 py-1">
      <figure className="h-20 flex gap-2 items-center">
        <div className="h-full aspect-square">
          <img
            src="https://media.istockphoto.com/id/531464366/ko/%EC%82%AC%EC%A7%84/%EB%B9%84%ED%94%84-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC-%EA%B7%B8%EB%A6%B4.jpg?s=612x612&w=0&k=20&c=63BnTyph_l2fMmtfbQGsfyiJoZmR1mXs0FHYDJ5IFCM="
            alt="고기"
            className="w-full h-full overflow-hidden object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-start">
          <figcaption className="text-sx font-medium">서울식당</figcaption>
          <p className="text-text-sm text-slate-600">한식, 500m</p>
          <span className="text-text-sm text-slate-600">별 4.5</span>
        </div>
      </figure>
      <span>하트</span>
    </article>
  );
}
