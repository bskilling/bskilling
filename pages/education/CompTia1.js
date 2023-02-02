import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Comptia() {
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
    "Comp TIA Network+",
    "CompTIA Security+",
  ];
  const defaults = "CompTia CySA+";
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
              CompTia CySA+
            </h1>

            <p className="text-lg mt-4 flex  gap-8 ">
              {" "}
              <span className="font-bold">
                Level: <span className="font-semibold">Intermediate </span>{" "}
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
      <p className="text-center  mt-4 mb-2">Introduction to CompTia CySA+</p>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className=" mt-12 mb-8 text-2xl  text-center font-bold">
            Curriculum
          </p>
          <div className="grid md:container md:mx-auto md:grid-cols-1 lg:grid-cols-3   ">
            <div className="px-8 p-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full  pt-2    rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Module 1 – Threat Management 1
                </p>

                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Cybersecurity Analysts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Cybersecurity Roles and
                    Responsibilities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Frameworks and Security
                    Controls
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Risk Evaluation IDE
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Penetration Testing
                    Processes Reconnaissance Techniques
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The Kill Chain
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Social Engineering
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Topology Discovery
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Service Discovery
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>OS Fingerprinting
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Module 2 – Threat Management 2
                </p>
                <p className="font-semibold text-black text-left  mb-4">
                  Security Appliances
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configuring Firewalls
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Intrusion Detection and
                    Prevention
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Configuring IDS
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Configuring Anti-virus
                    Software
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Sysinternals
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Enhanced Mitigation
                    Experience Toolkit
                  </p>
                  <p className="font-semibold text-black text-left mt-3 mb-2">
                    Logging and Analysis
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Packet Capture
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Packet Capture Tools
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Monitoring Tools
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Log Review and SIEM
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>SIEM Data Outputs
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>SIEM Data Analysis
                    Point-in-Time Data Analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Module 3 – Vulnerability Management
                </p>
                <p className="font-semibold text-black text-left mt-3 mb-2">
                  Managing Vulnerabilities
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Vulnerability Management
                    Requirements
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Asset Inventory
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Data Classification
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Vulnerability Management
                    Processes
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Vulnerability Scanners
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Microsoft Baseline
                    Security Analyzer
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Vulnerability Feeds and
                    SCAP
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Configuring Vulnerability
                    Scans
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Vulnerability Scanning
                    Criteria
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Exploit Frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <div className="text-black text-left   pb-5">
                  <p className="font-semibold text-black text-left mt-3 mb-2">
                    Remediating Vulnerabilities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Analyzing Vulnerability
                    Scans
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Remediation and Change
                    Control
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Remediating Host
                    Vulnerabilities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Remediating Network
                    Vulnerabilities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Remediating Virtual
                    Infrastructure Vulnerabilities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Microsoft Baseline
                    Security Analyzer
                  </p>
                  <p className="font-semibold text-black text-left mt-3 mb-2">
                    Secure Software Development
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Software Development
                    Lifecycle
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Software Vulnerabilities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Software Security Testing
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Interception Proxies
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Web Application Firewalls
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Source Authenticity
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Reverse Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Module 4 – Cyber Incident Response
                </p>
                <p className="font-semibold text-black text-left mb-4">
                  Incident Response Processes
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Threat Classification
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Incident Severity and
                    Prioritization
                  </p>
                  <p className="font-semibold text-black text-left mt-3 mb-2">
                    Types of Data
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Digital Forensics
                    Investigations
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Documentation and Forms
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Digital Forensics Crime
                    Scene
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Digital Forensics Kits
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Image Acquisition
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Password Cracking
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Analysis Utilities
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-semibold text-black text-left mb-4">
                  Incident Analysis and Recovery
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Analysis and Recovery
                    Frameworks
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Analyzing Network Symptoms
                  </p>

                  <p className="flex">
                    <span className="w-fit ">✔️</span>Analyzing Host Symptoms
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Analyzing Data
                    Exfiltration
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Analyzing Application
                    Symptoms Scene
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Using Sysinternals
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Containment Techniques
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Eradication Techniques
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Validation Techniques
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Corrective Actions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Module 5 – Security Architecture
                </p>
                <p className="font-semibold text-left text-black mb-4">
                  Network Segmentation
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Blackholes, Sinkholes,
                    and Honeypots
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>System Hardening
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Group Policies and MAC
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Endpoint Security
                  </p>
                  <p className="font-semibold text-left text-black mt-4 mb-2">
                    Managing Identities and Access
                  </p>
                  <div className="text-black text-left   pb-5">
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Network Access Control
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span>Identity Management
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span>Identity Security Issues
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span>Identity Repositories
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-semibold text-left text-black mb-4">
                  Context-based Authentication
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Single Sign On and
                    Federations
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Exploiting Identities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Exploiting Web Browsers
                    and Applications
                  </p>
                  <p className="font-semibold text-left text-black mt-3 mb-2">
                    Security Frameworks and Policies
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Frameworks and Compliance
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Reviewing Security
                    Architecture
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Procedures and
                    Compensating Controls
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Verifications and Quality
                    Control
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Security Policies and
                    Procedures
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Personnel Policies and
                    Training
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
          <div className=" flex md:justify-center flex-col items-center ">
            <div className="w-full md:w-[500px]  text-left">
              {" "}
              <p className=" w-full   text-black mt-4 ">
                <span className=" text-left ">✔️</span> Used for network
                competence analysis to strengthen security by finding and
                addressing malware and Advanced Persistent Threats (APTs)
              </p>
            </div>
            <div className="md:w-[500px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span> Understand threat and
                vulnerability management concepts
              </p>
            </div>

            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>Understand how to conduct a
                cyber incident response
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>Understand how to setup a
                strong security architecture for your networks
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full  text-black  ">
                <span className="w-full ">✔️</span> Know what different types of
                cybersecurity tools are on the market and which to use in
                different scenarios
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

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-xl ">Prerequisites</p>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 items-center gap-5 ">
            <div className="p-1  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className=" text-center text-black mt-4 mb-10">
                  we recommend a minimum of three-to-four years of hands-on
                  information security or related experience
                </p>
              </div>
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
                                <option
                                  key={index}
                                  className="text-black"
                                
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

export default Comptia;
