export default function TeamMember(props) {
  const { img, alt, name, role, icon1, link1, icon2, link2, icon3, link3 } =
    props;

  return (
    <div
      className="flex flex-col items-center justify-between p-[20px] w-[300px] min-h-[400px] desktop1:w-[300px] desktop1:h-[450px] desktop2:w-[439px] desktop2:h-[527px] rounded-[24px] bg-cover bg-center relative mb-[70px] m-auto"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* <img
        alt={alt}
        src={img}
        className="w-[215px] h-[215px] desktop1:w-full desktop1:h-[260px]  mb-[24px] bg-white rounded-md"
      ></img> */}
      <div className="bg-white w-[80%] absolute bottom-[-55px] rounded-[16px] flex flex-col items-center py-6 shadow-black/20 shadow-lg">
        <h1 className="text-black text-[22px] text-center font-bold w-[190px] leading-[25px]">
          {name}
        </h1>
        <div className="desktop2:h-auto mt-4 flex justify-center">
          <p className="text-center text-black/60 text-[16px] tablet1:w-[100%]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
