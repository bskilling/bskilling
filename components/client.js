import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Clients() {
  const logos = [
    "/clients/dodsal.png",
    "/clients/Accenture.png",
    "/clients/capgemini.png",
    "/clients/HCL.png",
    "/clients/wipro.png",
    "/clients/futt.png",
    "/clients/DIFCL.png",
    "/clients/arqaam.png",
    "/clients/zafco.png",
    "/clients/cremica.png",
    "/clients/perfect.png",
    "/clients/mandiesel.png",
    "/clients/Atos.png",
    "/clients/laxmi1.png",
    "/clients/alseer.png",
    "/clients/sap.png",
  ];

  return (
  <section className=" md:pt-14  pb-5 pt-7 bg-coustom1   relative">
      <div className="flex gap-4 justify-center mb-8 ">
        <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
        <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
        Our Customers
        </h1>
        <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
      </div>

      <div className="lg:container  mx-auto  lg:pb-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={3}
          breakpoints={{
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 800,

              pagination: {
               
              },
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              Autoplay: true,
              loop: true,
              speed: 1200,

              pagination: {
               
              },
            },
          }}
          // breakpoints={{
          //   768: {
          //     slidesPerView: "auto",
          //   },
          //   1024: {},
          // }}
          autoplay={true}
          loop={true}
          speed={1200}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div className="h-36 w-auto  relative cursor-pointer">
                <Image
                  layout="fill"
                  alt=""
                  src={x}
                  className="absolute inset-0 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
