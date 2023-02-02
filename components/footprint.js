import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  FaAccessibleIcon,
  FaAddressBook,
  FaAdjust,
  FaBeer,
  FaDownload,
  FaSalesforce,
  FaVideo,
} from "react-icons/fa";
function Footprint() {
  const footPrints = [
    {
      id: 1,
      name: " 50+",
      title: "Clients",
    },
    {
      id: 2,
      name: " 20+",
      title: "Fortune 100 Clients",
    },
    {
      id: 3,

      name: "  15000+",
      title: "IT Placements",
    },
    { id: 4, name: "200+ ", title: "CXOs Placed" },

    {
      id: 5,
      name: " 30000+",
      title: "SAP Professionals",
    },
    {
      id: 6,

      name: "10000+",
      title: "Oracle Professionals",
    },
    {
      id: 7,
      name: "  5000+",
      title: "Trainers",
    },
    {
      id: 8,
      name: "1000+",
      title: "SMEs",
    },
  ];
  const industry = [
    {
      id: 1,
      title: " Manufacturing",
    },
    {
      id: 2,
      title: " BFSI",
    },
    {
      id: 3,
      title: " Travel & Transportation",
    },
    {
      id: 4,
      title: "    Media",
    },
    {
      id: 5,
      title: " Healthcare",
    },
    {
      id: 6,
      title: "  Energy & Utilities",
    },
    {
      id: 7,
      title: " Consumer Goods",
    },
    {
      id: 8,
      title: "  Retail",
    },
  ];
  return (
    <>
      <section className="text-black md:pt-14 pt-7 pb-6  md:pb-10   bg-white">
        <div className=" container  lg:h-full h-1/2 mx-auto ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={40}
            slidesPerGroup={1}
            // breakpoints={{
            //   768: {
            //     slidesPerView: "auto",
            //   },
            //   1024: {},
            // }}
            autoplay={true}
            loop={true}
            speed={1400}
          >
            <SwiperSlide>
              <div className="flex gap-5 justify-center m">
                <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
                <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
                  Footprint
                </h1>
                <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
              </div>
              <div className="grid  lg:grid-cols-4 grid-cols-2 mt-14 mb-10 gap-5 justify-center   items-center">
                {footPrints.map(({ name, title, id }) => (
                  <div key={id} className=" w-full items-start">
                    <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                      <div>
                        <h2 className="title-font flex-1 text-center font-medium text-3xl text-black">
                          {name}
                        </h2>
                        <div className="flex justify-center">
                          <h1 className="lg:w-full w-[70px] lg:ml-0  h-[2px] bg-orange"></h1>
                        </div>

                        <p className="leading-relaxed text-center">{title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* ////////////////////////////////////// */}
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-5  mt-2  justify-center ">
                <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
                <h1 className="text-3xl lg:w-[250px]  capitalize lg:text-4xl text-black  text-center">
                  Industries
                </h1>
                <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
              </div>
              <div className="grid  lg:grid-cols-4 grid-cols-2   mt-12 mb-10  h-fit gap-x-7 gap-y-7 lg:gap-10 justify-center  items-center">
                {industry.map(({ title, id }) => {
                  return (
                    <div key={id} className=" w-full items-start">
                      <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                        {/* icon */}
                        <div>
                          <h2 className="title-font lg:w-fit  flex-1 font-medium text-center   text-2xl text-black">
                            {title}
                          </h2>
                          <div className="flex justify-center">
                            <h1 className="w-full lg:ml-0  h-[2px] bg-orange"></h1>
                          </div>

                          {/* <p className="leading-relaxed">lorem ip</p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Footprint;
