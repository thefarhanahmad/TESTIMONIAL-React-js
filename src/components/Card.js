import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Card({ data }) {
  return (
    // wrapper
    <div className="bg-white gap-2 w-1/2 hover:shadow-xl rounded-lg pb-28  p-8  flex relative flex-col items-center">
      {/* image and circle */}
      <div className="bg-gray-600 absolute -top-20 left-5">
        <div className="bg-violet-600 w-32 h-32 absolute left-3 -top-1  rounded-full" />
        <div className="w-32 absolute rounded-full overflow-hidden">
          <img src={data.image} alt="img" />
        </div>
      </div>

      {/* name and bio */}
      <h2 className="text-xl text-black font-bold">{data.name}</h2>
      <p className="text-violet-500 text-md -mt-2">{data.job}</p>

      {/* description */}
      <div className="text-sm opacity-90 text-center space-y-2">
        <RiDoubleQuotesL className="mx-auto text-2xl text-violet-500" />
        <p>{data.text}</p>
        <RiDoubleQuotesR className="mx-auto text-2xl text-violet-500" />
      </div>
    </div>
  );
}
export default Card;
