import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Azure() {
  const [isExpanded1, setExpanded1] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const opt = [
    "CompTia CySA+",
    "CompTIA Network+",
    "Azure Security",
    "Block Chain",
    "Data Science",
    "Power BI",
    "WEB 3.0",
    "Artificial Intelligence/ Machine Learning",
    "META",
    "Python Certification",
    "CompTIA Security+",
  ];
  const defaults = "Azure Security";
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
    <div>
      <div className="w-full h-80 relative ">
        <Image
          layout="fill"
          alt="ser"
          src="/edu&car/education1.png"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative   max-auto  h-full flex flex-col justify-center items-center">
            <h1 className=" text-4xl   font-bold  w-full  text-center   text-white   ">
              Azure Security
            </h1>
            <p className="text-lg mt-4 flex  gap-8 ">
              {" "}
              <span className="font-bold">
                Level: <span className="font-semibold">Beginner </span>
              </span>{" "}
              <span className="font-bold">
                Duration:<span className="font-semibold"> 3 to 5 Days </span>{" "}
              </span>{" "}
              <span className="font-bold">
                Mode:<span className="font-semibold"> Virtual</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <section>
        <p className="mt-5  text-2xl  text-center font-bold  w-full     text-black">
          Course Content
        </p>{" "}
      </section>
      <p className="text-center    mt-4 mb-2">Introduction to Azure Security</p>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className=" mt-12 mb-8 text-2xl  text-center font-bold ">
            Curriculum
          </p>
          <div className="grid md:container md:mx-auto md:grid-cols-1 lg:grid-cols-3   ">
            <div className="p-4 px-8  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full  pt-2    rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Azure Basics
                </p>
                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Core Azure Concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Core Azure Services
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Core Azure Solutions and
                    Management Tools
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Core Azure Network and
                    Security Concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Core Azure Governance and
                    Compliance Concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Core Azure Cost
                    Management and SLA Concepts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">Azure AD</p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explore Azure Active
                    Directory features
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Compare Azure AD vs
                    Active Directory Domain Services
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Investigate roles in
                    Azure AD
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Deploy Azure AD Domain
                    Services
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Create and manage Azure
                    AD users
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Manage users with Azure
                    AD groups
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configure Azure AD
                    administrative units
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement password less
                    authentication
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Azure IAM</p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explore Azure AD identity
                    protection
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configure risk event
                    detections
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement user risk
                    policy
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement sign-in risk
                    policy
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Deploy multi-factor
                    authentication in Azure
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explore multi-factor
                    authentication settings{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Enable multi-factor
                    authentication
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement Azure AD
                    conditional access
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configure conditional
                    access conditions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement access reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Azure AD Privileged Identity Management (PIM)
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explore the zero trust
                    model{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Review the evolution of
                    identity management{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>
                    Deploy Azure AD privileged identity management{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Manage and implement
                    security center recommendationse{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configure privileged
                    identity management scope{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement privileged
                    identity management onboarding{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explore privileged
                    identity management configuration settings{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement a privileged
                    identity management workflows
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Azure DLP, AIP, MCAS
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Data Loss Prevention
                    (DLP){" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Protection Control{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Protecting a confidential
                    document using DLP only
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Protecting a confidential
                    document using AIP only{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Protecting a confidential
                    document using both DLP and AIP
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Azure Information Protection (AIP)
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Microsoft Information
                    Protection SDK{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Installing the Azure
                    Information Protection (AIP) unified labeling scanner{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Finding your sensitive
                    content with the Azure Information Protection (AIP) scanner{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <div className="grid  md:grid-cols-1 lg:grid-cols-3  gap-5 ">
            <div className="pl-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mt-4 mb-4">
                  Microsoft Cloud Application Security (MCAS)
                </p>
                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Review the Microsoft
                    identity platform{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Microsoft Data
                    Classification Service (DCS){" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Sensitive Information
                    Types{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Office 365 Data Loss
                    Prevention (DLP)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Azure and MS Defender
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Review the cyber kill
                    chain{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement Microsoft
                    Defender for Cloud
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configure security center
                    policies
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Manage and implement
                    security center recommendations
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explore secure score
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Deploy Microsoft Defender
                    for Cloud
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Define brute force
                    attacks
                  </p>

                  <p className="flex">
                    <span className="w-fit ">✔️</span> Implement Just-in-time VM
                    access
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Azure Security
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explore Azure Monitor{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configure and monitor
                    metrics and logs{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Enable Log Analytics{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Manage connected sources
                    for log analytics{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Enable Azure monitor
                    Alerts{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configure properties for
                    diagnostic logging{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-2xl ">Benefits</p>
          <div className=" flex md:justify-center flex-col items-center gap-5 ">
            <div className="w-full md:w-[450px]  text-left">
              {" "}
              <p className=" w-full  text-black mt-4 ">
                <span className=" text-left ">✔️</span> Azure Information
                Protection
              </p>
            </div>
            <div className="md:w-[450px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span> Safeguard and maintain
                control of keys and other secrets.
              </p>
            </div>

            <div className="w-full md:w-[450px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Azure DDos Protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-2xl ">Prerequisites</p>
          <div className=" flex md:justify-center flex-col items-center gap-5 ">
            <div className="w-full md:w-[450px]  text-left">
              {" "}
              <p className=" w-full  text-black mt-4 ">
                <span className=" text-left ">✔️</span> Basic understanding of
                cloud and networking
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:container md:mx-auto">
        <p className="text-center mt-10 mb-10 font-bold text-2xl ">Schedule</p>
        <div className="overflow-x-auto mb-10 sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="">
              <table
                data-aos="fade-up"
                data-aos-once="true"
                className="min-w-full bg-"
              >
                <thead className="border">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm border border-black font-medium text-black px-6 py-4 text-left"
                    >
                      Batch
                    </th>
                    <th
                      scope="col"
                      className="text-sm border border-black font-medium text-black px-6 py-4 text-left"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm border border-black font-medium text-black px-6 py-4 text-left"
                    >
                      End Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm border border-black font-medium text-black px-6 py-4 text-left"
                    >
                      Timing
                    </th>
                  </tr>
                </thead>
                <tbody>
                 
                  <tr className="border-b ">
                    <td className="px-6 py-4 border border-black whitespace-nowrap text-sm font-medium text-black">
                      Batch 1
                    </td>
                    <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                      06-02-2023
                    </td>
                    <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                      15-02-2023
                    </td>
                    <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                      09:00 AM to 13:00 PM
                    </td>
                  </tr>
                  <tr className="bg- border-b">
                    <td className="px-6 border border-black py-4 whitespace-nowrap text-sm font-medium text-black">
                      Batch 1
                    </td>
                    <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                      06-03-2023
                    </td>
                    <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                      15-03-2023
                    </td>
                    <td className="text-sm border border-black text-black  px-6 py-4 whitespace-nowrap">
                      14:00 PM to 18:00 PM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          // backgroundImage:
          //   "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
          height: "350px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-2xl  font-bold tracking-tight mb-12">
                Application Process
              </h1>
              <p className=" mb-4">
                Please fill in the enrollment form and our advisor will connect
                to understand your requirement and explain about the program and
                benefits.
              </p>
              <div className="flex justify-center mt-2 ">
                <button
                  onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                  href="/"
                >
                  <p className="text-white border  hover:border-0 border-green w-[120px] h-[60px] font-bold ease-out duration-300 rounded-md  hover:bg-green  flex justify-center items-center text-left hover:cursor-pointer">
                  Enroll Now
                  </p>
                </button>
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
                      onClick={() =>
                        setExpanded1((prevExpanded) => !prevExpanded)
                      }
                      className="lg:w-[500px] h-full p-5 md:py-10 md:px-10  bg-white flex flex-col  overflow-auto w-full  "
                    >
                      <div
                        onClick={() =>
                          setExpanded1((prevExpanded) => !prevExpanded)
                        }
                        className=" hover:cursor-pointer text-xl text-end font-extrabold text-green animate-bounce  w-full"
                      >
                        X
                      </div>
                      <h2 className="text-black  text-lg mb-1 font-normal title-font">
                        Sign-up with our learning programs today and take your
                        career to the next level.
                      </h2>

                      <div className="w-full h-[5px] mb-4  border-2 border-green bg-green"></div>
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-black"
                        >
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
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm text-black"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
                          <span className="text-black text-sm">
                            Select Course
                          </span>
                          <select
                            value={defaults}
                            defaultValue={defaults}
                            className=" block w-full border text-black border-green text-sm h-[47px] rounded-sm  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                            {...register("interest", { required: true })}
                          >
                            {opt.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  className="text-black"
                                  value={item}
                                >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Azure;
