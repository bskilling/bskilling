import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Educations() {
  const blog = [
    {
      id: 1,
      title: "Azure Security",
      mode: "Virtual",
      Levels: "Beginner",
      dur: " 3 to 5 Days",
      point: [],
      img: "/eduimg/azure.png",
      link: "/education/azure",
    },
    {
      id: 2,
      title: "Block Chain",
      mode: "Virtual",

      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/block.jpg",
      link: "/education/blockchain",
    },
    {
      id: 3,
      title: "Data Science",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/data.jpg",
      link: "/education/DataScience",
    },
    {
      id: 4,
      title: "Power BI",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: "40 Hours",
      img: "/eduimg/power.png",
      link: "/education/PowerBI",
    },
  ];

  const blog1 = [
    {
      id: 5,
      title: "WEB 3.0",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: "8 Hours",
      img: "/eduimg/web.png",
      link: "/education/WebThree",
    },
    {
      id: 6,
      title: "Artificial Intelligence/ Machine Learning",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: "40 Hours",
      img: "/eduimg/ai.jpeg",
      link: "/education/aiAndMl",
    },
    {
      id: 7,
      title: "META",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 8 Hours",
      img: "/eduimg/meta.png",
      link: "/education/meta",
    },
    {
      id: 8,
      title: "Python Certification",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 32 Hours",
      img: "/eduimg/python.png",
      link: "/education/python",
    },
  ];
  const blog2 = [
    {
      id: 9,
      title: "CompTia CySA+",
      mode: "Virtual",
      point: [],
      Levels: "Intermediate",
      dur: "40 Hours",
      img: "/eduimg/compi.png",
      link: "/education/CompTia1",
    },
    {
      id: 10,
      title: "CompTIA Network+",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 40 Hours",
      img: "/eduimg/compi2.png",
      link: "/education/CompTia",
    },
    {
      id: 11,
      title: "CompTIA Security+",
      mode: "Virtual",
      point: [],
      Levels: "Intermediates",
      dur: " 40 Hours",
      img: "/eduimg/compi2.png",
      link: "/education/compiSecurity",
    },
    {
      id: 12,
      title: "Scrum Master",
      mode: "Virtual",
      point: [],
      Levels: "Beginner",
      dur: " 16 Hours",
      img: "/eduimg/scrum.png",
      link: "/education/Scrum",
    },
    // {
    //   id: 11,
    //   title: "Java",
    //   mode: "Hybrid (Online + Offline)",
    //   point: [],
    //   Levels: "Intermediates",
    //   dur: " 40 Hours",
    //   img: "/know/java.png",
    //   link: "/education/compiSecurity",
    // },
  ];

  return (
    <>
      <section className="text-black md:container  mx-auto  body-font md:pt-14 md:pb-10 ">
        <div className="">
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

                pagination: {},
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                Autoplay: true,
                loop: true,
                speed: 800,

                pagination: {},
              },
            }}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={true}
            speed={1600}
            effect=""
          >
            <SwiperSlide>
              <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 ">
                {blog.map(({ link, id, img, Levels, dur, mode, title }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit hover:shadow-md bg-white hover:scale-100 ease-in duration-300  flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-contain xl:w-[100%] xl:h-[34rem]"
                            src={img}
                            width={400}
                            height={300}
                            alt=""
                          ></Image>
                        </div>

                        <h1 className="title-font sm:text-2xl text-xl text-center  text-gray-900 mb-3">
                          {title}
                        </h1>
                        <p className="text-center font-bold">
                          Level :{" "}
                          <span className="font-semibold">{Levels}</span>
                        </p>
                        <p className="text-center font-bold">
                          Mode : <span className="font-semibold">{mode}</span>{" "}
                        </p>
                        <p className="text-center font-bold">
                          Duration :{" "}
                          <span className="font-semibold">{dur}</span>{" "}
                        </p>
                        <p className="leading-relaxed mt-5 text-left ">{""}</p>
                      </div>
                      <div className="flex justify-center mt-2 ">
                        <Link href="/education">
                          <p className="text-black  border-2 hover:border-0 border-green  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-green hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </Link>
                      </div>
                      <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 ">
                {blog1.map(({ link, id, img, Levels, dur, mode, title }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit hover:shadow-md bg-white hover:scale-100 ease-in duration-300  flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-contain xl:w-[100%] xl:h-[34rem]"
                            src={img}
                            width={300}
                            height={200}
                            alt=""
                          ></Image>
                        </div>

                        <h1 className="title-font sm:text-2xl text-xl text-center  text-gray-900 mb-3">
                          {title}
                        </h1>
                        <p className="text-center font-bold">
                          Level :{" "}
                          <span className="font-semibold">{Levels}</span>
                        </p>
                        <p className="text-center font-bold">
                          Mode : <span className="font-semibold">{mode}</span>{" "}
                        </p>
                        <p className="text-center font-bold">
                          Duration :{" "}
                          <span className="font-semibold">{dur}</span>{" "}
                        </p>
                        <p className="leading-relaxed mt-5 text-left ">{""}</p>
                      </div>
                      <div className="flex justify-center mt-2 ">
                        <Link href="/education">
                          <p className="text-black  border-2 hover:border-0 border-green  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-green hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </Link>
                      </div>
                      <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 ">
                {blog2.map(({ link, id, img, Levels, dur, mode, title }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit hover:shadow-md bg-white hover:scale-100 ease-in duration-300  flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-contain xl:w-[100%] xl:h-[34rem]"
                            src={img}
                            width={400}
                            height={300}
                            alt=""
                          ></Image>
                        </div>

                        <h1 className="title-font sm:text-2xl text-xl text-center  text-gray-900 mb-3">
                          {title}
                        </h1>
                        <p className="text-center font-bold">
                          Level :{" "}
                          <span className="font-semibold">{Levels}</span>
                        </p>
                        <p className="text-center font-bold">
                          Mode : <span className="font-semibold">{mode}</span>{" "}
                        </p>
                        <p className="text-center font-bold">
                          Duration :{" "}
                          <span className="font-semibold">{dur}</span>{" "}
                        </p>
                        <p className="leading-relaxed mt-5 text-left ">{""}</p>
                      </div>
                      <div className="flex justify-center mt-2 ">
                        <Link href="/education">
                          <p className="text-black  border-2 hover:border-0 border-green  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-green hover:text-white  flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </Link>
                      </div>
                      <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
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
