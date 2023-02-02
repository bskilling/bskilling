import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function CompTia() {
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
  ];
  const defaults = "CompTIA Network+";
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
                Level: <span className="font-semibold">Beginner </span>{" "}
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
      <p className="text-center  mt-4 mb-2">Introduction to CompTIA Network+</p>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className=" mt-12 mb-14 text-2xl  text-center font-bold">
            Curriculum
          </p>
          <div className="grid md:container md:mx-auto md:grid-cols-1 lg:grid-cols-3   ">
            <div className="px-8 p-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full  pt-2    rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Module 1- Networking Fundamentals
                </p>

                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Compare and contrast the
                    Open Systems Interconnection (OSI) model layers and
                    encapsulation concepts OSI model Data encapsulation and
                    decapsulation within the OSI model context
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <p className="flex font-bold">
                <span className="w-fit "></span> Explain the characteristics of
                network topologies and network types
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span> Mesh
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span> Star/hub-and-spoke
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Bus
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Bus
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Ring
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Hybrid
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Network types and
                characteristics
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Service-related entry point
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Virtual network concepts
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Provider links
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Ring
              </p>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Summarize the types of cables and connectors and explain which
                  is the appropriate type for a solution.
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Copper
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Fiber
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Connector types bitwise
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Cable management
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Ethernet standards
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Explain common ports and protocols, their application, and
                  encrypted alternatives
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Protocols
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Connection less vs.
                    connection-oriented
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Explain the use and
                    purpose of network services.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> DHCP
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>DNS
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> NTP
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Explain basic corporate and data center network architecture.
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Three-tiered
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Spine and leaf
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Software-defined
                    networking
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Traffic Flows
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Branch office vs.
                    on-premises data center vs. colocation
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Storage area networks
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Summarize cloud concepts and connectivity options
                </p>
                <p className="font-semibold text-left text-black mb-4">
                  NumPy for mathematical computing
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Deployment Models
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Service Models
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Infrastructure as code
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Multi tenancy
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Elasticity
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Scalability
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Security Implications
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Module 2- Network Implementations
                </p>

                <p className="font-bold text-left text-black mb-4">
                  Compare and contrast various devices, their features, and
                  their appropriate placement on the network
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Networking devices
                  </p>
                  <p className="font-bold text-left text-black mb-4">
                    Compare and contrast routing technologies and bandwidth
                    management concepts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Routing
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Bandwidth Management
                  </p>

                  <p className="font-bold text-left text-black mb-4">
                    Given a scenario, configure and deploy common Ethernet
                    switching features
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Address Resolution
                    Protocol (ARP)
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Neighbor Discovery
                    Protocol
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Given a scenario, install and configure the appropriate
                  wireless standards and technologies
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> 802.11 Standards
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Frequencies and range
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Channels
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Channel Bonding
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Antenna Types
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Antenna Types
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Cellular Technologies
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Multiple input, Multiple
                    Output and Multi-user MIMO
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mt-4 mb-4">
                  Module 3
                </p>
                <p className="font-semibold text-black text-left mt-4 mb-4">
                  Network Operations
                </p>
                <p className="font-bold text-left text-black mb-4">
                  Given a scenario, use the appropriate statistics and sensors
                  to ensure network availability
                </p>
                <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                  <div className="text-black text-left   pb-5">
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Performance
                      metrics/sensors
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> SNMP
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Network device logs
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Interface
                      statistics/status
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Interface errors or
                      alerts
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span>Environmental Factors
                      and sensors
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Baselines
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Net flow Data
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Uptime/downtime
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Uptime/downtime
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
          <div className="grid  md:grid-cols-1 lg:grid-cols-3  gap-5 ">
            <div className="pl-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mt-4 mb-4">
                  Explain the purpose of organizational documents and policies
                </p>

                <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                  <div className="text-black text-left   pb-5">
                    <p className="flex">
                      <span className="w-fit ">✔️</span> PerformancePlans and
                      procedures
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Hardening and security
                      policies
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Common documentation
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Common agreements
                    </p>{" "}
                    <p className="font-bold text-black text-left mt-4 mb-4">
                      Explain high availability and disaster recovery concepts
                      and summarize which is the best solution
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Load balancing
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Multipathing
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Network interface card
                      (NIC) teaming
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Facilities and
                      infrastructure support
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Redundancy and high
                      availability (HA) concepts
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Network device
                      backup/restore
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 4</p>
                <p className="font-semibold text-black text-left mb-4">
                  Explain common security concepts
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">-</span> Confidentiality,
                    integrity, availability (CIA)
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Threats
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Vulnerabilities
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Exploits
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Least privilege
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Role-based access
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Zero Trust
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Defense in depth
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Authentication methods
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Risk Management
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Security information and
                    event management (SIEM)
                  </p>{" "}
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-semibold text-black text-left mb-4">
                  Compare and contrast common types of attacks
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Technology Based
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Human and environmental
                  </p>
                  <p className="font-semibold text-black text-left mb-4">
                    Given a scenario, apply network hardening techniques
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Best Practices
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Wireless Security
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> IOT Access Considerations
                  </p>{" "}
                  <p className="font-semibold text-black text-left mb-4">
                    Compare and contrast remote access methods and security
                    implications
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Explain the importance of
                    physical security
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Module 5-Network Troubleshooting
                </p>
                <p className="font-semibold text-black text-left mb-4">
                  Explain the network troubleshooting methodology.
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Identify the problem
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Establish a theory of
                    probable cause
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Test the theory to
                    determine the cause
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <div className="text-black text-left   pb-5">
                  <p className="font-semibold text-black text-left mb-4">
                    Given a scenario, troubleshoot common cable connectivity
                    issues and select the appropriate tools
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Specifications and
                    limitations
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Cable considerations
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Cable applications
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Common Issues
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Common Tools
                  </p>{" "}
                  <p className="font-semibold text-black text-left mb-4">
                    Given a scenario, use the appropriate network software tools
                    and commands
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Software tools
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Command line tool
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Basic network platform
                    commands
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
          <div className=" flex md:justify-center flex-col items-center">
            <div className="w-full md:w-[500px]  text-left">
              {" "}
              <p className=" w-full flex  text-black mt-4 ">
                <span className=" text-left ">✔️</span> Network troubleshooting,
                Network cabling, configuration
              </p>
            </div>
            <div className="md:w-[500px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span> Security and hardening
                networks
              </p>
            </div>

            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>IP addressing ans connecting
                networks
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Support the creation of
                virtualized networks
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Configure, manage and
                maintain network devices
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Use devices, such as
                switches and routers, to segment network traffic and create
                resilient networks
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
                <span className="w-full ">✔️</span> CompTIA&#39;s Network+
                certification validates the knowledge and skills needed to
                troubleshoot, configure and manage both wired and wireless
                networks and understanding of emerging technologies including
                cloud and virtualization technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-2xl ">Prerequisites</p>
          <div className=" flex md:justify-center flex-col items-center">
            <div className="w-full md:w-[500px]  text-left">
              {" "}
              <p className=" w-full flex  text-black mt-4 ">
                <span className=" text-left ">✔️</span> Network administrators
              </p>
            </div>
            <div className="md:w-[500px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span>Students who wish to make
                career in Networking
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

export default CompTia;
