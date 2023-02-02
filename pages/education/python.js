import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Python() {
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
    "CompTIA Security+"
  ];
  const defaults = "Python Certification";
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
              Python Certification
            </h1>

            <p className="text-lg mt-4 flex  gap-8 ">
              {" "}
              <span className="font-bold">
                Level: <span className="font-semibold">Beginner </span>{" "}
              </span>{" "}
              <span className="font-bold">
                Duration:<span className="font-semibold"> 32 Hours </span>{" "}
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
        Introduction to Python certification
      </p>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className=" mt-12 mb-14  text-2xl  text-center font-bold ">
            Curriculum
          </p>
          <div className="grid md:container md:mx-auto md:grid-cols-1 lg:grid-cols-3   ">
            <div className="px-8 p-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full  pt-2    rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">Module 1</p>
                <p className="font-semibold mt-4 text-black text-left  mb-4">
                  Python Environment Setup and Essentials
                </p>
                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Introduction to Python
                    Language
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Features, the advantages
                    of Python over other programming languages
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Python installation –
                    Windows, Mac &amp; Linux distribution for Anaconda
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Python Deploying Python
                    IDE
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Basic Python commands,
                    data types, variables, keywords and more
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">Module 2</p>
                <p className="font-semibold text-black text-left  mb-4">
                  Python language Basic Constructs
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Built-in data types types
                    in Python
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Learn classes, modules,
                    Str(String), Ellipsis Object, Null Object, Ellipsis, Debug
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Basic operators,
                    comparison, arithmetic, slicing and slice operator, logical,
                    bitwise
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Loop and control
                    statements while, for, if, break, else, continue.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 3</p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> OOP concepts in Python
                    How to write OOP concepts program in Python
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Connecting to a database
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Classes and objects in
                    Python
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> OOPs paradigm, important
                    concepts in OOP like polymorphism, inheritance,
                    encapsulation
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Python functions, return
                    types and parameters
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Lambda expressions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 4</p>
                <p className="font-semibold text-black text-left mb-4">
                  Database connection
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Understanding the
                    Database, need of database
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Installing MySQL on
                    windows Understanding Database connection using Python.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">Module 5</p>
                <p className="font-semibold text-left text-black mb-4">
                  NumPy for mathematical computing
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Introduction to arrays
                    and matrices
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Broadcasting of array
                    math, indexing of array
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Standard deviation,
                    conditional probability, correlation and covariance.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">Module 6</p>
                <p className="font-semibold text-left text-black mb-4">
                  SciPy for scientific computing
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit "></span> Introduction to SciPy
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Functions building on top
                    of NumPy, cluster, linalg, signal, optimize, integrate, sub
                    packages, SciPy with Bayes Theorem.
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
                  Module 7
                </p>
                <p className="font-semibold text-black text-left mt-4 mb-4">
                  Matplotlib for data visualization
                </p>
                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> How to plot graph and
                    chart with Python
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Various aspects of line,
                    scatter, bar, histogram, 3D, the API of MatPlotLib,
                    subplots.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 8</p>
                <p className="font-semibold text-black text-left mb-4">
                  Pandas for data analysis and machine learning
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Introduction to Python
                    dataframes
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Importing data from JSON,
                    CSV, Excel, SQL database, NumPy array to dataframe
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Various data operations
                    like selecting, filtering, sorting, viewing, joining,
                    combining
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 9</p>
                <p className="font-semibold text-black text-left mb-4">
                  Exception Handling
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Introduction to Exception
                    Handling
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Scenarios in Exception
                    Handling with its execution
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Arithmetic exception
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> RAISE of Exception
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> What is Random List,
                    running a Random list on Jupyter Notebook
                  </p>

                  <p className="flex">
                    <span className="w-fit ">✔️</span>Value Error in Exception
                    Handling.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 10</p>
                <p className="font-semibold text-black text-left mb-4">
                  Multi Threading &amp; Race Condition
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Introduction to Thread,
                    need of threads
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>What are thread functions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Performing various
                    operations on thread like joining a thread, starting a
                    thread, enumeration in a thread Creating a Multithread,
                    finishing the multithreads.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Understanding Race
                    Condition, lock and Synchronization.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 11</p>
                <p className="font-semibold text-black text-left mb-4">
                  Packages and Functions
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Intro to modules in
                    Python, need of modules
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>11.2 How to import modules
                    in python
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Locating a module,
                    namespace and scoping
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Arithmetic operations on
                    Modules using a function Intro to Search path, Global and
                    local functions, filter functions
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Python Packages, import
                    in packages, various ways of accessing the packages
                    Decorators, Pointer assignments, and Xldr.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">Module 12</p>
                <p className="font-semibold text-black text-left mb-4">
                  Web scraping with Python
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Introduction to web
                    scraping in Python
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Installing of beautiful
                    soup
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Installing Python parser
                    lxml
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Various web scraping
                    libraries, beautiful soup, Scrapy Python packages.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> PCreating soup object
                    with input HTML
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Searching of tree, full
                    or partial parsing, output print.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-2xl ">Prerequisites</p>
          <div className="flex md:justify-center flex-col items-center   ">
          <div className="w-full md:w-[700px]  text-left">
              {" "}
              <p className=" w-full flex  text-black mt-4 ">
                <span className=" text-left ">✔️</span> Basic Computer Skills - Anyone starting to learn computer programming needs basic computer skills. Python is a cross-platform language, so it makes no difference whether you use a macOS, Windows, or even Linux.
              </p>
            </div>
            
            <div className="md:w-[700px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span> Web Developers
              </p>
            </div>

            <div className="w-full md:w-[700px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>Python programmers
              </p>
            </div>
            <div className="w-full md:w-[700px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Data scientists
              </p>
            </div>
            <div className="w-full md:w-[700px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> UX designers
              </p>
            </div>
            <div className="w-full md:w-[700px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>Devops engineers
              </p>
            </div>
          </div>
        </div>
      </section>


      

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className="text-center mt-12 font-bold text-xl ">
            Course Projects
          </p>
          <div className="grid mt-5 md:grid-cols-1 grid-cols-1 items-center ">
            <div className="p-1  hover:scale-105 ease-in duration-300  lg:w-full">
              <p className="font-bold text-black text-center mb-4">
                Analyzing the Naming Pattern Using Python
              </p>
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className=" text-center text-black mt-4 mb-4">
                  {" "}
                  <span className="w-fit ">✔️</span>
                  This real-life-based project has been included in the training
                  to allow the learners to work with the United States Social
                  Security Administration (SSA) that has made data available on
                  the frequency of baby names from 1880 to 2016.
                </p>
              </div>
              
            </div>
            <div className="p-1  hover:scale-105 ease-in duration-300  lg:w-full">
              <p className="font-bold text-black text-center mb-4">
                Python Web Scraping for Data Science
              </p>
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="text-center text-black mt-4 mb-4">
                  {" "}
                  <span className="w-fit ">✔️</span>
                  The project gives a practical exposure to the applications of
                  this programming language in web scraping. Also get a chance
                  to work on various Web Scraping libraries, Beautiful Soup,
                  Navigable String, parser, searching tree deployment, and more.
                </p>
              </div>
            </div>
            <div className="p-1  hover:scale-105 ease-in duration-300  lg:w-full">
              <p className="font-bold text-black text-center mb-4">
                Performing Analysis on Customer Churn Dataset
              </p>
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className=" text-center text-black mt-4 mb-4">
                  {" "}
                  <span className="w-fit ">✔️</span>
                  As an important part of the project, the learners will be
                  required to analyze employment reliability in the telecom
                  industry and work on real-time analysis of data with multiple
                  labels and data visualization for reliability factor.
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
                      13-02-2023
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
                      13-03-2023
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

export default Python;
