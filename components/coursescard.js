import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import useCollapse from "react-collapsed";
import { useState } from "react";
import { useForm } from "react-hook-form";

function CoursesCard({ id, title, dur, mode, levels, point }) {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    easing: "cubic-bezier(0.37, 0, 0.63, 1)",
    duration: 600,
  });
  const opt = [
    "Testing",
    "DotNet",
    "Java",
    "SAP",
    "AZURE",
    "Mainframe",
    "ServiceNow",
    "Siebel",
    "VUE.JS",
    "RPA",
    "PMP",
    "Big Data",
    "SCRUM Master",
    "Cyber Security",
    "Block Chain",
    "Data Science",
    "Machine Learning /Artificial Intelligence",
    "Web 3.0",
    "Meta",
    "Devops",
    "Python",
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange" });
  const [message, setMessage] = useState(false);
  const isButtonVisble =
    watch("name") &&
    watch("email") &&
    watch("phone") &&
    watch("interest") &&
    watch("info") &&
    watch("location") &&
    watch("experience");

  const submit = handleSubmit(async (data) => {
    const { name, email, phone, interest, info, location, experience } = data;
    try {
      const response = await fetch(
        "https://bmx35e32jaxiqyqr46j3ow2nda0xrcdo.lambda-url.ap-south-1.on.aws/",
        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "course",
            name,
            email,
            phone,
            interest,
            info,
            location,
            experience,
          }),
        }
      );

      if (response.status === 200) {
        reset({
          name: "",
          phone: "",
          email: "",
          interest: "",
          info: "",
          experience: "",
          location: "",
        });
        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
  });
  return (
    <>
      <div key={id} className="w-full  flex   flex-col">
        <div
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          className="bg-green shadow-sm w-full  rounded flex  p-4 h-full items-center"
        >
          <div>
            {isExpanded ? (
              <BiMinus size={15} className=" text-white w- h-6 mr-4" />
            ) : (
              <BsPlusLg size={15} className=" text-white w- h-6 mr-4" />
            )}
          </div>

          <span className="text-white font-bold ">{title}</span>
        </div>
        <div>
          <section {...getCollapseProps()}>
            <div className="flex">
              <div className="w-full">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-5 pb-24 rounded-lg border text-center relative">
                  <h2 className=" text-left   text-black mb-3">
                    <span className="font-bold">Level : </span>
                    {levels}
                  </h2>
                  <h1 className="  text-left text-black mb-3">
                    <span className="font-bold">Mode :</span> {mode}
                  </h1>
                  <h1 className="  text-left text-black mb-3">
                    <span className="font-bold">Duration :</span>
                    {dur}
                  </h1>
                  <h1 className="  text-left text-black mb-3">
                    <span className="font-bold">Curriculum :</span>
                  </h1>
                  <div className="flex ">
                    <ul className=" ml-14 flex flex-col list-disc  text-left ">
                      {point.map(({ name }, index) => {
                        return (
                          <li key={index} className="text-black">
                            <p className="list-disc  ">{name}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <button
                      onClick={() =>
                        setExpanded1((prevExpanded) => !prevExpanded)
                      }
                      className="flex mx-auto mt-16 text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-orange ease-in duration-300 hover:text-black rounded text-lg "
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {isExpanded1 && (
        <div
          onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
          className={`fixed flex justify-center items-center bg-opacity-80 z-50 top-0   left-0 w-screen h-screen bg-black`}
        >
          <div
            className={`
           
               " w-full lg:w-fit lg:h-[90%] h-full   flex flex-row lg:flex-col justify-center bg-gray bg-opacity-100"
        `}
          >
            <div
              onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
              className="lg:w-[500px] h-full p-5 md:py-10 md:px-10  bg-white flex flex-col  overflow-auto w-full  "
            >
              <div
                onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                className=" hover:cursor-pointer text-xl text-end font-extrabold text-green animate-bounce  w-full"
              >
                X
              </div>
              <h2 className="text-black  text-lg mb-1 font-normal title-font">
                Sign-up with our learning programs today and take your career to
                the next level.
              </h2>

              <div className="w-full h-[5px] mb-4  border-2 border-green bg-green"></div>
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", {
                    required: true,
                  })}
                  className="w-full bg-white rounded border border-green focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.name ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>
              <div className="relative ">
                <label htmlFor="email" className="leading-7 text-sm text-black">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  className="w-full bg-white rounded border border-green focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.email ? "visible" : "invisible"
                  }`}
                >
                  {errors.email?.type == "required"
                    ? "This field is required"
                    : "Enter a valid email address"}
                </label>
              </div>
              <div className="relative ">
                <label
                  htmlFor="mobile"
                  className="leading-7 text-sm text-black"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  placeholder=""
                  {...register("phone", {
                    required: true,
                    minLength: 9,
                    pattern:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  })}
                  className="w-full bg-white rounded border border-green focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.phone ? "visible" : "invisible"
                  }`}
                >
                  {errors.phone?.type == "required"
                    ? "This field is required"
                    : "Please enter a valid phone number"}
                </label>
              </div>
              <div className="relative ">
                <label
                  htmlFor="location"
                  className="leading-7 text-sm text-black"
                >
                  Location
                </label>
                <input
                  type="text"
                  {...register("location", { required: true })}
                  className="w-full bg-white rounded border border-green focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.location ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>

              <div className="relative ">
                <label
                  htmlFor="Experience"
                  className="leading-7 text-sm text-black"
                >
                  Experience (Years)
                </label>
                <input
                  type="text"
                  className="w-full bg-white rounded border border-green focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...register("experience", {
                    required: true,
                    minLength: 1,
                    pattern: /[1-4]/g,
                  })}
                />
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.experience ? "visible" : "invisible"
                  }`}
                >
                  This field is required, accept numeric values only
                </label>
              </div>

              {/* <div className="relative ">
                <label
                  htmlFor="resume"
                  className="leading-7 text-sm text-black"
                >
                  Your resume (docx/pdf)
                </label>
                <input
                  type="file"
                  accept="application/pdf,application/vnd"
                  {...register("resume", {
                    required: true,
                    validate: {
                      lessThan10MB: (files) =>
                        files[0]?.size / 1024 / 1024 < 2 || "Max 2mb",
                      acceptedFormats: (files) =>
                        ["application/vnd", "application/pdf"].includes(
                          files[0]?.type
                        ) || "Only docx, pdf",
                    },
                  })}
                  className="w-full bg-white rounded border border-green focus:border-green focus:ring-2 focus:ring-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <label
                  className={`text-red-600  text-xs py-1  
                  ${errors.resume ? "visible" : "invisible"}
                  `}
                >
                  <span>{errors.resume?.message || "FILE 2MB"}</span>
                </label>
              </div> */}

              <div className="relative ">
                <label className="block">
                  <span className="text-black text-sm">Select Course</span>
                  <select
                    defaultValue={title}
                    className=" block w-full border border-green text-sm h-[47px] rounded-sm  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                    {...register("interest", { required: true })}
                  >
                    {opt.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.interest ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>

              <div className="relative ">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-black"
                >
                  Message
                </label>

                <textarea
                  className="w-full bg-white rounded border border-green focus:border-green focus:ring-2 focus:ring-green h-11 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  {...register("info", { required: true })}
                ></textarea>
                <label
                  className={`text-red-600   text-xs py-1 ${
                    errors.info ? "visible" : "invisible"
                  }`}
                >
                  This field is required
                </label>
              </div>

              <div className="w-full flex justify-center items-center">
                {message ? (
                  <p className="text-green text-md font-semibold pt-6 ">{`Your message is sent. We'll get back to you at the earliest`}</p>
                ) : (
                  <button
                    onClick={submit}
                    disabled={!isButtonVisble}
                    className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${
                      isButtonVisble ? "opacity-100" : "opacity-50 "
                    }
                      
                      `}
                  >
                    SEND
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default CoursesCard;
