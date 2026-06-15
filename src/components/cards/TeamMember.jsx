export default function TeamMember(props) {
  const { img, alt, name, role, icon1, link1, icon2, link2, icon3, link3 } =
    props;

  return (
    <div
      className="flex flex-col items-center justify-between p-[20px] w-[300px] min-h-[315px] desktop1:w-[300px] desktop1:h-[430px] desktop2:w-[400px] desktop2:h-[430px] rounded-[24px] bg-cover bg-top relative mb-[70px] m-auto"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* <img
        alt={alt}
        src={img}
        className="w-[215px] h-[215px] desktop1:w-full desktop1:h-[260px]  mb-[24px] bg-white rounded-md"
      ></img> */}
      <div className="bg-white w-[80%] absolute bottom-[-55px] rounded-[16px] flex flex-col items-center py-4 shadow-black/20 shadow-lg">
        <h1 className="text-black text-[18px] text-center font-bold w-[200px] leading-[25px]">
          {name}
        </h1>
        <div className="flex justify-center mt-1 desktop2:h-auto">
          <p className="text-center text-black/60 text-[16px] tablet1:w-[100%]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
