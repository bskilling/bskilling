import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonials() {
  const stuff = [
    {
      text: "exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Palash Pandey",
      position: "Co-Founder",
      company: "Renaura Wellness Pvt Ltd",
      logo: "/clients/Wipro.png",
      id: 1,
    },
    {
      text: "exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Megha Kapur",
      position: "President",
      company: "Prima USA, LLC",
      logo: "/clients/dodsal.png",
      id: 2,
    },
    {
      text: " incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/mandieselicon.png",
      id: 3,
    },
    {
      text: "cidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/Capgemini.png",
      id: 4,
    },
    {
      text: " exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/hcl.png",
      id: 5,
    },
    {
      text: " exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/Accenture.png",
      id: 6,
    },
  ];

  return (
    <section className="text-black md:pt-14 md:pb-10 pt-7 pb-5  bg-white body-font">
      <div className="container px-5  mx-auto">
        <div className="flex gap-4 justify-center mb-10">
          <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
          <h1 className="text-3xl capitalize lg:text-4xl text-black  text-center">
            Testimonials
          </h1>
          <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
        </div>
        <div className="flex flex-wrap -m-4  justify-center py-3 ">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            breakpoints={{
              769: {
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
                speed: 800,

                pagination: {
                 
                },
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
            speed={800}
          >
            {stuff.map(({ text, id, logo, company, position }) => (
              <SwiperSlide key={id}>
                <div className="w-full  flex flex-col justify-around h-[550px] shadow-lg border border-gray-400">
                  <div className="bg-green-50 p-6 rounded-lg ">
                    <div className="h-16 w-full relative cursor-pointer">
                      <Image
                        layout="fill"
                        alt=""
                        src={logo}
                        className="absolute inset-0 object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-black text-center mt-14 ">{text}</p>
                    </div>
                  </div>
                  <div>
                    
                    <p className="text-center  mt-4">{company}</p>
                    <p className="text-center text-sm">{position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
