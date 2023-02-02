import Link from "next/link";
import Image from "next/image";
function Itservicescard({ name, icon, description, id, type, role }) {
  return (
    <div className="xl:w-full md:w-full p-4">
      <div className=" border-gray-200 p-6 rounded-lg">
        <div className="w-full flex items-center justify-center rounded-full  text-indigo-500 mb-4">
          <Image
            src={icon}
            alt={name}
            width={100}
            height={100}
            className=""
            objectFit="fill"
          />
        </div>
        <h2 className="text-lg text-white text-center font-semibold  mb-2">
          {name}
        </h2>
        <p className="leading-relaxed text-white text-center">{type}</p>
        <p className="leading-relaxed text-white text-center">{role}</p>
        <div className="flex justify-center mt-4">
          <Link href={"/solutions/talent"}>
            <p className="text-white  p-2 font-bold ease-in duration-300 rounded-md hover:text-black hover:bg-orange  flex justify-center items-center text-left hover:cursor-pointer">
              Learn More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Itservicescard;
