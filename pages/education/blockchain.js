import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Blockchain() {
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
  const defaults = "Block Chain";
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
              Block Chain
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
      <p className="text-center  mt-4 mb-2">
        Network evolution from Centralise to Decentralise system.
      </p>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className=" mt-12 mb-8 text-2xl  text-center font-bold">
            Curriculum
          </p>
          <div className="grid md:container md:mx-auto md:grid-cols-1 lg:grid-cols-3   ">
            <div className="px-8 p-4 hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full  pt-2    rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Introduction to block chain
                </p>
                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>History of block chain
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Birth of Bitcoin and
                    Cryptocurrency
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> What is block chain?{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Centralized Vs
                    Decentralized
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>A peek into block chain
                    under the hood
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Why block chain?
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Overview of Block chain
                    use cases
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4   hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Technology terms
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Cryptography
                    (Private-public key)
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Digital signature
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Elliptic Curve
                    cryptography
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Hashing
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Merkel tree
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Encoding/Decoding (Base
                    58/64)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Building block of blockchain
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Security
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Immutability, Tracebility
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Provenance
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Finality
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Fault tolerance
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Consensus (PoW-Minnig,
                    POS, PBFT etc.)s{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Smart Contracts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Benefits</p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Transparency
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Data/Process integrity{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>
                    Disintermediation{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Cost efficiency
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Empowered user{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Faster transaction{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Block chain terms
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Account or Address
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Transactions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Block
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Wallet
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Type of Blockchain Public, Private, Permissioned,
                  Permissionless, etc. Comaprision of below blockchain
                  platforms.
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Ethereum
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Hyperledger Fabric
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> R3 Corda
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
                  Type of decentralised storage
                </p>
                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> IPFS
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> BigChainDB    
                  </p>
                  <p className="font-bold text-black text-left mt-4 mb-4">
                    Ethereum Platform
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Ethers, Gas,
                    Transactions, Chain explorers, Events &amp; Logs
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Accounts, Keystore,
                    Mining, Wallets, Sending &amp; Receiving ethers
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Ethereum Network (Local,
                    TestNet, MainNet etc.), Geth Client
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Smart Contracts, EVM,
                    Solidity Programing language
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Solidity contract
                    development, compilation, and deployment
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> E2E Ethereum application
                    structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Build a Blockchain from grounds up with Ethereum Smart
                  Contracts
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Ethereum DApp Development
                    Tools &amp; Testing Web3js, Truffle, TestRPC/Ganache etc.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> IDemo of DApps with
                    blockchain transaction lifecycle
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Decentrlized Identity
                    Management
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Token contract and crowd
                    sale
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Native(Platform) currency
                    Vs Token
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Token standard like ERC20
                    etc for Cloud
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> White paper, yellow paper
                    for the concept.
                  </p>

                  <p>
                    <span className="w-fit ">✔️</span> Asset Tokenization
                  </p>
                  <p>
                    <span className="w-fit ">✔️</span> Type of Tokens - Security
                    Vs Utility tokens
                  </p>
                  <p>
                    <span className="w-fit ">✔️</span> Token distribution and
                    how to get tokens
                  </p>
                  <p>
                    <span className="w-fit ">(1)</span> Marketing (Social
                    channels, ICO Forums etc. )
                  </p>
                  <p>
                    <span className="w-fit ">(2)</span> Technical aspect - token
                    smart contract and DApp development
                  </p>
                  <p>
                    <span className="w-fit ">(3)</span> Pre-sales or Private
                    Sales
                  </p>
                  <p>
                    <span className="w-fit ">(4)</span> ICO (Initial coin
                    offering) for Public
                  </p>
                  <p>
                    <span className="w-fit ">(5)</span> Bounty Program
                  </p>
                  <p>
                    <span className="w-fit ">(6)</span> Trade on exchanges.
                  </p>
                  <p>
                    <span className="w-fit ">(7)</span> Overview of some hacks
                    in the past few years
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Digital currency, Tokens market cap in fiat, bitcoin and how
                  valuation done  - Cyber security, Fraud detection
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> DDoS{" "}
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Fault Tolerance
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> PKI (Cryptography,
                    Digital Signatures)
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Provence using tamper
                    proof Data and Things
                  </p>
                  <p className="flex font-bold">
                    <span className="w-fit "></span> Blockchain Security
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> CPublic vs Private vs
                    Consortium based blockchains
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Hyperledger Concepts and
                    Architecture
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Introduction to Composer,
                    Explorer and Playground
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Component model of
                    Hyperledger
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Peer, Orderer, CA
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Hyperledger Smart
                    Contracts
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Writing the Chain Code
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Privacy
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Throught channles,
                    Membership services,
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Consensus
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> PBFT
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Assets
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Digital Twins
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Realizing the
                    Architecture
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Transactions, Ledger,
                    Nodes
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Peer, Endorser, Ordering,
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Channels, CA, Flow
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Hands on Lab session
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
          <div className=" flex md:justify-center flex-col items-center  ">
            <div className="w-full md:w-[1000px]  text-left">
              {" "}
              <p className=" w-full  text-black mt-4 ">
                <span className=" text-left ">✔️</span> The goal of block chain
                is to allow digital information to be recorded and distributed,
                but not edited. In this way, a block chain is the foundation for
                immutable ledgers, or records of transactions that cannot be
                altered, deleted, or destroyed.
              </p>
            </div>
            <div className="md:w-[1000px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span> Comprehend the Blockchain
                technology and key concepts like cryptography and cryptocurrency
                concepts.
              </p>
            </div>

            <div className="w-full md:w-[1000px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Understand the key concepts
                like cryptography and cryptocurrency concepts.
              </p>
            </div>
            <div className="w-full md:w-[1000px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Understand the key concepts
                like cryptography and cryptocurrency concepts.
              </p>
            </div>
            <div className="w-full md:w-[1000px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Gain a deep insight into
                Bitcoin, its network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-2xl ">Prerequisites</p>

          <div className="flex md:justify-center flex-col items-center  ">
            <div className="w-full md:w-[1000px]  text-left">
              {" "}
              <p className=" w-full  text-black mt-4 ">
                <span className=" text-left ">✔️</span> All IT professionals,
                who wish to acquire new skills or improve their existing skills.
              </p>
            </div>

            <div className="w-full md:w-[1000px]  text-left">
              {" "}
              <p className=" w-full  text-black  ">
                <span className=" text-left ">✔️</span> Basic mathematical
                calculation skills and logical skills
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
              <p className="font-semibold mb-4">
                Please fill in the enrollment form and our advisor will connect
                to understand your requirement and explain about the program and
                benefits
              </p>
              <div className="flex justify-center mt-2 ">
                <button
                  onClick={() => setExpanded1((prevExpanded) => !prevExpanded)}
                  href="/"
                >
                  <p className="text-white border  hover:border-0 border-green w-[120px] h-[60px] font-bold ease-out duration-300 rounded-md  hover:bg-green flex justify-center items-center text-left hover:cursor-pointer">
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

export default Blockchain;
