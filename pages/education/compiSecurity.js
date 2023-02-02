import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function CompiSecurity() {
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
  const defaults = "CompTIA Security+";
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
              CompTIA Network+
            </h1>

            <p className="text-lg mt-4 flex  gap-8 ">
              {" "}
              <span className="font-bold">
                Level: <span className="font-semibold">Intermediates </span>{" "}
              </span>{" "}
              <span className="font-bold">
                Duration:<span className="font-semibold"> 40 Hours </span>{" "}
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
      <p className="text-center  mt-4 mb-2">
        Introduction to CompTIA Security+
      </p>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className=" mt-12 mb-14 text-2xl  text-center font-bold">
            Curriculum
          </p>
          <div className="grid md:container md:mx-auto md:grid-cols-1 lg:grid-cols-3   ">
            <div className="px-8 p-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full  pt-2    rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Module 1 - Attacks, Threats, and Vulnerabilities
                </p>

                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Comparing Security Roles
                    and Controls
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Compare and Contrast
                    Information Security Roles
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Compare and Contrast
                    Security Control and Framework Types
                  </p>
                  <p className="flex font-bold">
                    <span className="w-fit "></span>Threat Actors and Threat
                  </p>
                  <p className="flex ml-4">
                    <span className="w-fit ">✔️</span> Threat Actor Types and
                    Attack Vectors
                  </p>
                  <p className="flex ml-4">
                    <span className="w-fit ">✔️</span>Threat Intelligence
                    Sources
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <p className="flex font-bold  ml-4">
                <span className="w-fit ">✔️</span>Performing Security
                Assessments
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Assess Organizational Security
                with Network Reconnaissance Tools
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Security Concerns with General
                Vulnerability Types
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Vulnerability Scanning
                Techniques Penetration Testing Concepts
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Identifying Social Engineering
                and Malware
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Compare and Contrast Social
                Engineering Techniques.
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Analyze Indicators of
                Malware-Based Attacks
              </p>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Module 2- Architecture and Design
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Summarizing Basic
                    Cryptographic Concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Compare and Contrast
                    Cryptographic Ciphers
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Summarize Cryptographic
                    Modes of Operation
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Summarize Cryptographic
                    Use Cases and Weaknesses
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Summarize Other
                    Cryptographic Technologies
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Implementing Public Key Infrastructure
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Certificates and
                    Certificate Authorities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> PKI Management
                  </p>
                  <p className="flex">
                    <span className="w-fit font-bold">✔️</span>Implementing
                    Authentication Controls
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Authentication Design
                    Concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Knowledge-Based
                    Authentication
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Authentication
                    Technologies
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Biometrics Authentication
                    Concepts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Module 3- Implementation
                </p>
                <p className="font-bold text-black text-left mb-4">
                  Implementing Secure Network Designs
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Secure Network Designs
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Secure Switching and
                    Routing
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Secure Wireless
                    Infrastructure
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Load Balancers
                  </p>
                  <p className="flex font-bold">
                    <span className="w-fit ">✔️</span>Implementing Network
                    Security Appliances
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Firewalls and Proxy
                    Servers
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Network Security
                    Monitoring
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Use of SIEM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Implementing Secure Network Protocols
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Secure Network Operations
                    Protocols
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Secure Application
                    Protocols
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Secure Remote Access
                    Protocols
                  </p>
                  <p className="flex font-bold">
                    <span className="w-fit ">✔️</span>Implementing Host Security
                    Solutions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Secure Firmware
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Endpoint Security
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Embedded System Security
                    Implications
                  </p>
                  <p className="flex font-bold">
                    <span className="w-fit ">✔️</span>Implementing Secure Mobile
                    Solutions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Mobile Device Management
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Secure Mobile Device
                    Connections
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Module 4- Operations and Incident Response
                </p>

                <p className="font-bold text-left text-black mb-4">
                  Secure Application Concepts
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Analyze Indicators of
                    Application Attacks
                  </p>
                  <p className=" text-left text-black ">
                    Analyze Indicators of Web Application Attacks
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Secure Coding Practices
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Secure Script
                    Environments
                  </p>

                  <p className="font-bold text-left text-black mb-4">
                    Deployment and Automation Concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit font-bold ">✔️</span> Implementing
                    Secure Cloud Solutions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Secure Cloud and
                    Virtualization Services
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Apply Cloud Security
                    Solutions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Infrastructure as Code
                    Concepts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Explaining Data Privacy and Protection Concepts
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Privacy and Data
                    Sensitivity Concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Privacy and Data
                    Protection Controls
                  </p>
                  <p className="flex font-bold">
                    <span className="w-fit ">✔️</span> Performing Incident
                    Response
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Incident Response
                    Procedures
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Utilize Appropriate Data
                    Sources for Incident Response
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Apply Mitigation Controls
                  </p>{" "}
                  <p className="flex font-bold">
                    <span className="w-fit ">✔️</span> Explaining Digital
                    Forensics
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Key Aspects of Digital
                    Forensics Documentation
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Key Aspects of Digital
                    Forensics Evidence Acquisition
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mt-4 mb-4">
                  Module 5- Governance, Risk, and Compliance
                </p>

                <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                  <div className="text-black text-left   pb-5">
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Summarizing Risk
                      Management Concepts
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Risk Management
                      Processes and Concepts
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Business Impact
                      Analysis Concepts
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Interface
                      statistics/status
                    </p>{" "}
                    <p className="flex font-bold">
                      <span className="w-fit ">✔️</span> Implementing
                      Cybersecurity Resilience
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span>Redundancy Strategies
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Backup Strategies
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Cybersecurity
                      Resilience Strategies
                    </p>
                    <p className="flex font-bold">
                      <span className="w-fit ">✔️</span> Importance of Physical
                      Site Security Controls
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Importance of Physical
                      Host Security Controls
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-2xl ">Benefits</p>
          <div className=" flex md:justify-center flex-col items-center ">
            <div className="w-full md:w-[500px]  text-left">
              {" "}
              <p className=" w-full flex  text-black mt-4 ">
                <span className=" text-left ">✔️</span> Design and implement
                functional networks
              </p>
            </div>
            <div className="md:w-[500px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span> Configure, manage, and
                maintain essential network devices
              </p>
            </div>

            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>Use devices such as switches
                and routers to segment network traffic and create resilient
                networks
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Identify benefits and
                drawbacks of existing network configurations
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Implement network security,
                standards and protocols
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Troubleshoot network
                problems
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Support the creation of
                virtualized networks.
              </p>
            </div>
            <div className="w-full md:w-[700px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> validates the knowledge and
                skills needed to troubleshoot, configure and manage both wired
                and wireless networks CompTIA Network+ certifies a
                professional-level understanding of emerging technologies
                including cloud and virtualization technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-xl ">Prerequisites</p>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 items-center gap-5 ">
            <div className="p-1  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className=" text-center text-black mt-4 mb-4">
                  <span className="w-full ">✔️</span> CompTIA A+ Certification
                  and at least 9 to 12 months of networking experience
                </p>
              </div>
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
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
          height: "350px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-3xl  font-bold tracking-tight mb-12">
                Application Process
              </h1>
              <p className=" mb-4">
                Please fill in the enrollment form and our advisor will connect
                to understand your requirement and explain about the program and
                benefits
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
                            defaultValue={defaults}
                            value={defaults}
                            className=" block w-full border text-black border-green text-sm h-[47px] rounded-sm  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                            {...register("interest", { required: true })}
                          >
                            {opt.map((item, index) => {
                              return (
                                <option key={index} className="text-black">
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

export default CompiSecurity;
