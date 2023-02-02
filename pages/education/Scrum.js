import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
function Scrum() {
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
    "Scrum Master",
  ];
  const defaults = "Scrum Master";
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
              Scrum Master
            </h1>

            <p className="text-lg mt-4 flex  gap-8 ">
              {" "}
              <span className="font-bold">
                Level: <span className="font-semibold">Beginner </span>{" "}
              </span>{" "}
              <span className="font-bold">
                Duration:<span className="font-semibold"> 16 Hours </span>{" "}
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
      <p className="text-center  mt-4 mb-2">Introduction to Scrum Master</p>

      <section className="text- container  mx-auto body-font">
        <div className="">
          <p className=" mt-12 mb-14 text-2xl  text-center font-bold">
            Curriculum
          </p>
          <div className="grid md:container md:mx-auto md:grid-cols-1 lg:grid-cols-3   ">
            <div className="px-8 p-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full  pt-2    rounded-lg  text-center relative">
                <p className="font-bold text-black text-left  mb-4">
                  Defined Vs Empirical Process
                </p>

                <div className="text-black text-left  pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The course will educate
                    all participants from the basics of agile software
                    development. Hence it is important that one should
                    understand agile as an empirical process against the
                    waterfall approach which is a defined process. You will be
                    taught to Plan, Execute, Check and then Adapt. Yes, CSM
                    course begins with the detailed introduction to the
                    iterative four-step approach.
                  </p>
                  <p className="flex font-bold mt-4 mb-2">
                    <span className="w-fit "></span>Introduction to Agile
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Learn the need for being
                    agile in your software development projects. Understand the
                    key concepts of the development using the agile approach
                    which is driven by value. It is a well- organized project
                    management process. Also, know how to embrace flexible
                    planning methods. Become collaborative with the team, scrum
                    master, and product owner.
                  </p>
                  <p className="flex mb-2 mt-4 font-bold">
                    <span className="w-fit "></span>Trivia About Agile
                    Methodology
                  </p>
                  <p className="flex ml-4">
                    <span className="w-fit ">✔️</span> In order to correct
                    issues cropping up due to the waterfall method, anew
                    development practice was introduced in 2001 by a set of
                    people called as Agile Methodology. The main concept adapted
                    in Agile is the iterative way. Development and testing
                    happen in parallel to fix bug sat every stage. Set of
                    software industry giants met in Snowbird, UT in 2000 to
                    discuss this method. Then they decided to differentiate
                    agile from the traditional method with some values and
                    called them Agile Manifesto.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <p className="flex font-bold mb-2 ml-4">
                <span className="w-fit "></span>Agile Framework –A Brief
                Overview
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>Agile the iterative software
                development method follows many frameworks including the Scrum,
                Lean, Kanban, Extreme Programming, Feature-driven development,
                etc. It is a big list and Scrum is the most commonly used
                framework. Every framework aims to making it light weight and
                framing of a set of minimal rules.The aim of every
                framework being reaching the goal in an agile way. Yes, the
                iterative and incremental method is embraced with its own set of
                practices.
              </p>
              <p className="flex ml-4">
                <span className="w-fit ">✔️</span>For example, the scrum will
                focus on three roles to go through the development cycle. The
                scrum master who is the coach and the link who connects the team
                and the customer. The product owner is the SME who will know the
                customers need and will let the team know about the
                same.Finally,the team which includes developers and testers to
                work on the project.Scrum method follows daily meetings,sprints
                and sprint retrospective to check the status of the project
                regularly.Feedback are exchanged and modifications are done at
                every stage.
              </p>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <div className="text-black text-left   pb-5">
                  <p className="flex ">
                    <span className="w-fit ">✔️</span>Agile Manifesto The set of
                    values defined for Agile methodology is called Agile
                    Manifesto. It was written in Feb 2001 by 17 independent
                    software techies. There were several written among which 4
                    values were accepted by all which is given below.
                  </p>
                  <p className="flex ">
                    <span className="w-fit ">✔️</span>The project can become
                    successful when it depends on people than tools, and
                    discussions must been courage than implementing hardcore
                    processes.
                  </p>

                  <p className="flex">
                    <span className="w-fit ">✔️</span>Working on the product
                    should be encouraged than focussing on documentation.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Reacting to the changes
                    and not strictly following a plan.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Every beginner must
                    understand this basic underlying principle of Agile to kick
                    start their career in agile. Defining and describing these
                    values with examples will allow learners to embrace the
                    concept easily.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  Key Principles in Agile
                </p>
                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> The four Agile Manifests
                    gave birth to 12 agile principles.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Customer satisfaction is
                    the prime objective and this can be achieved by delivering
                    projects on-time with the expected outcome.
                  </p>
                  <p className="flex">
                    <span className="w-fit font-bold">✔️</span>Accept changes at
                    any stage of development and produce a competitive product
                    to customer.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Continuously sharing
                    working software with the client instead of sharing
                    documentation about project status.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Business team and
                    development team work scroll abortively.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Provide support to the
                    team with a motivated working environment.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Conducting daily stand-up
                    meetings to let team meet face to face.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Measure work progress
                    with the working software.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Promote sustainable
                    development.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Good design will improve
                    the agility.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Keep the entire process
                    simple and discuss solutions more than worrying about the
                    problem.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span> Empower team to come up
                    with ideas
                  </p>

                  <p className="flex">
                    <span className="w-fit ">✔️</span> Introduce games during
                    meetings to ease team tension and increase productivity. How
                    to get to these principles will be explained during the
                    training.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110  hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mb-4">
                  The Five Scrum Values–CFOR C
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Yes,that’s how you can
                    easily remember the five values of the scrum process.CFORC
                    means to Commity out one encourage.To develop Courage you
                    need to Focus With Open mind and Respect all in the team.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>You got it right, it is
                    Commitment–Focus –Openness –Respect–Courage
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Develop these five values
                    and every scrum team will see success. Commit to the Sprint
                    Goal and focus to work towards the same. Share your views
                    openly and respect others opinions well. Have the courage to
                    accept what went wrong in a retrospective meeting to
                    complete back log sin your next sprint.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>{" "}
                    <p>
                      <span className="font-bold"> Bird’s-eyeView</span> The
                      elevated view from above about scrum is called the aerial
                      view of Scrum. It is a neatly-documented framework that
                      will address the facilitating limitations we relate to the
                      situation when there is any lack of details.The project is
                      split in to sequences of iteration sand completed phase by
                      phase.
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4   hover:scale-105 ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Scrum as a Framework
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span> The framework of Scrum is
                    simple and it deals efficiently with the changing
                    situations. The work gets split into iterations.It is
                    because during the development process the priority
                    changes due to the situation, user mindset, technology etc.
                    Therefore, the framework focus on splitting the project into
                    sequences of iterations called sprint. Every sprint will
                    last for maximum 4 weeks. Therefore the complexity of the
                    project is split and all changes are accommodated during the
                    sprint meeting. There is not much of loss and also the user
                    gets the output per the expectation.
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The framework is simply
                    understood as Planning – Executing – Learning – Taking
                    Actions.This will continue until the end result is achieved.
                    Every sprint meeting will be in length to plan from the
                    education of the previous sprint.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Artifacts of Scrum that enhances the Visibility – Product
                  Backlog, SprintBacklog,Increment
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit "></span>The evidence of human action
                    is called artifact. In the scrum, it is represented in the
                    form of a list, graph, etc. Artifacts are called
                    information radiators. With these radiators, it is possible
                    to achieve transparency in scrum projects which is one of
                    the pillars of the empirical scrum process. Among the many,
                    the three main artifacts are product backlog, sprint
                    backlog, and increments.
                  </p>
                  <p className=" text-left mt-4 text-black ">
                    <span className="font-bold"> product backlog–</span>The list
                    of deliverables required from each individual is called the
                    product backlog. The product owner will list the work and
                    creates a backlog in each persons name. The items are
                    prioritized and one on the top needs immediate action.
                  </p>

                  <p className=" text-left mt-4 text-black ">
                    <span className="font-bold"> Sprint backlog–</span>The list
                    of work taken for completion during as print meeting is
                    called sprint back log. During daily scrum, the team updates
                    the sprint backlog to know where the team is still the next
                    sprint meeting.
                  </p>
                  <p className=" text-left text-black ">
                    <span className="font-bold"> Increment – </span>The
                    completion of each product backlog item at the end of the
                    sprint called a product increment.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Product BacklogRefinement
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The activity involved in
                    understanding, prioritising and estimating there lated item
                    before sprint planning called product backlog refinement. In
                    simple words, the process in which the scrum team decides
                    about the time required to complete each backlog. Based on
                    this estimate they can refine the number of backlogs during
                    each sprint.
                  </p>
                  <p className="flex  mt-4 mb-2 font-bold">
                    <span className="w-fit "></span> Three Primary Roles
                    Identified in Scrum Projects
                  </p>
                  <p className="flex ">
                    <span className="w-fit ">✔️</span> The three key
                    stakeholders in the scrum team are the product owner, the
                    development team and the scrum master. These role are looked
                    up on based on their command and responsibility.
                  </p>
                  <p className="flex mt-4 font-bold">
                    <span className="w-fit "></span> Product Owner
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The person who is
                    responsible for prioritizing the work and one who owns the
                    ROI of the project is called the product owner. This person
                    understands the customer need and creates the product
                    backlog.
                  </p>{" "}
                  <p className=" text-left mt-4 text-black ">
                    <span className="font-bold">Development Team-</span>The set
                    of people who are involved in writing code and developing
                    the project is called the development team. These people
                    will be assigned product back log and will focus on
                    completing the same.
                  </p>
                  <p className=" text-left mt-4 text-black ">
                    <span className="font-bold">ScrumMaster –</span>The scrum
                    process is implemented with the help of the scrum
                    master.This individual bridges gap between the team and the
                    product owner. He/she hears the team view to help them
                    resolve issues to work towards the goal of the company.
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-4  hover:scale-105 ease-in duration-300  lg:w-full">
              <div className="h-full   px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-black text-left mt-4 ml-4 mb-4">
                  SprintPlanning
                </p>

                <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                  <div className="text-black text-left   pb-5">
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Sprint planning meeting
                      happens at the beginning of the sprint to discuss the
                      product back log to be assigned. In general, sprint
                      planning agile meeting are time bounded and happens for
                      about an hour during every week. The product owner will
                      priorities the product backlog and the team will discuss
                      ask questions be fore accepting the backlogs.
                    </p>
                    <p className="flex mt-4 mb-2 font-bold">
                      Executing the Sprint Plan
                    </p>
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Sprint execution is the
                      next step after the planning is over. The team has
                      mutually agreed to complete the product backlog and hence
                      will start executing them.If the planning is done after
                      discussing,then execution will be ontrack.Incase of any
                      hurdles,these issues will be discussed during the next
                      sprint meeting and the sprint backlog will be executed.
                    </p>
                    <p className="flex mt-4 mb-2 font-bold">
                      <span className="w-fit "></span> Daily Scrum Meeting and
                      Sprint Retrospective Meeting
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit "></span> The team meets every day
                      during the sprint and discuss.following.What did I
                      complete since yesterday?
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span>What will I work on till
                      tomorrow?
                    </p>{" "}
                    <p className="flex">
                      <span className="w-fit ">✔️</span> Daily Scrum should not
                      last more than 15 minutes and also it is a good practice
                      to conduct this meeting daily in the same place and at the
                      same time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Definition of Done(DoD)and Acceptance Criteria
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Every product backlog item
                    gets declared as DONE it must be accepted by all team member
                    sand they must in advance know when it is called DONE. Here
                    the team must be appraised of how a work is done, what are
                    the standards required to be obeyed, and the different ways
                    to verify whether it is done.
                  </p>
                  <p className="flex ">
                    <span className="w-fit ">✔️</span> Each user story will have
                    a specific criteria description called the acceptance
                    criteria for that story.
                  </p>
                  <p className="flex mt-4 mb-2 font-bold">
                    <span className="w-fit "></span> Agile Requirements
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The requirement in simple
                    words can be told as a service, feature or a function that
                    is required by the customer. It can be a function,
                    constraint, or business rule that is required to be present
                    to achieve the goal of the user.
                  </p>{" "}
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> In the agile, the
                    requirement is categorized as follows.
                  </p>
                  <p className=" text-left text-black ">
                    <span className="font-bold">✔️ </span> What it does –the
                    functionality and the features
                  </p>
                  <p className=" text-left text-black ">
                    <span className="font-bold">✔️ </span> How does it perform
                    –Acceptance criteria
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> The user story is the
                    requirement in agile projects which comprises 3elements
                    namely theC 3 Card, Conversation and the Confirmation. The
                    basic format of a user story is As a &lt;role of the
                    person&gt;,I need&lt;requirement&gt;, So that &lt;goal&gt;.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Estimation using Ideal Days and Story points
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Estimation can be done
                    using story points or the ideal days.
                  </p>
                  <p className="flex ">
                    <span className="w-fit ">✔️</span>A story point is a
                    measurement used to calculate the size of the product
                    backlog items but it does not have any units. Also, it helps
                    to compare the relatsive size of each backlog with the
                    other. Fibonacci series is used in the scrum as a scale
                    called stories for the product back log items.(1, 2,3, 5,
                    8,13, 21, 34,and so on).The high-level user stories are
                    called Epics and these scale used for them for20,40,
                    60,100etc.
                  </p>{" "}
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Ideal days is the time
                    required to complete each product backlog. This method will
                    help the naïve team to understand how to complete the
                    product backlog item. From prior experience and expert
                    opinion, the ideal days or time for completion of the task
                    is assigned by the senior officials.
                  </p>{" "}
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> Slowly move the team
                    to story point measuring method once they master the scrum
                    process,and terminologies like product backlog, sprint
                    backlog, and increments.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Sprint Burn down and Release Burn down charts
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The sprint burn downchart
                    is used to monitor the progression with in the sprint under
                    the following situations.
                  </p>
                  <p className="flex ">
                    <span className="w-fit ">✔️</span>Four or more week longer
                    sprints
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Bigger team size
                  </p>{" "}
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> Complex backlog items
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> It helps the team to
                    fix issues and achieve the goal without missing by recording
                    the number of the task not completed on a daily basis. This
                    will allow predicting if the team can accomplish the task
                    assigned for the sprint.
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> Likewise, the release
                    burn down chart is used to track the progression of the
                    scrum project as whole. It is a graph drawn with x-axis
                    showing the spring and the Y-axis the amount of pending work
                    beginningeachsprint.This can be representedasidealdays,story
                    points or team days as well. This will pave the way to
                    predict the completion of the project.
                  </p>
                  <p className="flex mt-4 mb-2 font-bold">
                    <span className="w-fit "></span> Release planning using
                    Velocity
                  </p>{" "}
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> The objective of
                    release planning is to plan and make the scope, budget, and
                    date for the incremental delivery in an agile project.
                    Planning to have multiple sprints until the final product is
                    released is discussed in the release planning meeting.
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️ </span> Every member of the
                    scrum team and the stakeholders are part of this release
                    plan meeting and it happens during each sprint activity.
                    There lease planning is done with the help of the product
                    planning output and the pace at which the team completes the
                    product backlog item per each sprint. This pace is nothing
                    but the speed of the team and termed as velocity in agile
                    projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Cross-functionalist-organizing teams
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The people responsible for
                    coding and developing the project is called the development
                    team. The team that test the bug and fixes the issues is
                    called the testing team. As far as scrum projects are
                    considered the entire team is called a scrum team which
                    includes developers, testers, product owners, scrum master,
                    and the high level stakeholders. These teams are
                    self-organizing in agile development and are independent to
                    complete their task. They don’t require anyone to monitor
                    but they manage themselves.
                  </p>
                  <p className="flex mt-4 mb-2 font-bold ">
                    <span className="w-fit "></span>Five simple steps to create
                    a working agreement in a Scrum team
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>The entire team discuss to
                    agree upon of a set of protocols. This happens with mutual
                    consent of the team members and following the five simple
                    steps will help make a proper working agreement.
                  </p>{" "}
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">1.</span> Every team member is
                    given stick-it notes and asked to write their views about
                    the project,deadline,completion etc.
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">2. </span> A good 3minutes is
                    given to each person to fill the following blank we can
                    complete the task when we teach write their want.
                  </p>
                  <p className="flex ">
                    <span className="w-fit ">3.</span> They can write 3 to 5
                    ideas.
                  </p>{" "}
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">4.</span>Ask everyone to read
                    one idea each and make sure that the other person does not
                    repeat the same idea.
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">5.</span> Have one person to
                    make a note of all the ideas on the board.
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">6.</span>Take voting from all to
                    come to a common working agreement from the list mentioned
                    in the board.
                  </p>
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">7.</span> Freeze and proceed to
                    successfully complete the work.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Scrum Team Tools and Techniques
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>There are several
                    techniques used by the scrum team to implement the project.
                    Based on the technique chosen a variety of tools are
                    available to support and speed up the process. Few common
                    tools and techniques used by the scrum team are listed
                    below.
                  </p>
                  <p className="flex">
                    <span className="w-fit font-bold">1.</span>Tuckman’s Group
                    Development Tools and Technique – Forming, Storming,
                    Norming, Performing, Adjourning.
                  </p>
                  <p className="flex">
                    <span className="w-fit font-bold">2.</span>
                    Scrum Master tools Cynefin
                    Framework–Simple,Complicated,Complex,andChaotic.
                  </p>
                  <p className="flex">
                    <span className="w-fit font-bold">3.</span>The Japanese Shu
                    HaRi– Shu–self-disciplining, Ha–Innovate things,
                    Ri–Execution Root cause analysis
                  </p>
                  <p className="flex mt-4 mb-2 font-bold ">
                    <span className="w-fit "></span>Agile and Distributed teams
                  </p>
                  <p className="flex">
                    <span className="w-fit ">✔️</span>These days working with
                    people across the globe on projects cannot be avoided. It is
                    not possible to meet all at one table to discuss. Therefore
                    managing teams with documentation might be effective but
                    time-consuming and hence organization must embrace an agile
                    way to work with distributed teams. Even though it has its
                    own flipside, still it is the best way to work with
                    distributed teams.
                  </p>{" "}
                  <p className=" text-left flex text-black ">
                    <span className="font-bold">✔️</span> Remember that people
                    remain the same irrespective of the geography and hence
                    getting work done by setting expectation is quick. Also, use
                    technology to meet people for daily stand up and execute the
                    project efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 hover:scale-110   ease-in duration-300 lg:w-full">
              <div className="h-full  px-8 pt-2  rounded-lg  text-center relative">
                <p className="font-bold text-left text-black mb-4">
                  Effective manager’s traits in scrum projects
                </p>

                <div className="text-black text-left   pb-5">
                  <p className="flex">
                    <span className="w-fit ">✔️</span>Scrum process empowers the
                    team to speak and share their views. Therefore, scrum
                    managers must understand the team strength and the product
                    owner need. The manager should discuss with the team and let
                    know the product owner to decide on the product back log
                    item. This will motivate the team to work towards delivery.
                    The manager must never be biased and push team for delivery.
                    Ensure that the team commits and support them during every
                    sprint to combat issues. The manager must not think of
                    bossing around but work along with the team to lead them to
                    successful completion.
                  </p>
                  <p className="flex  mt-4 mb-2 font-bold">
                    <span className="w-fit font-bold">1.</span>QA Team and Scrum
                    Process
                  </p>
                  <p className="flex">
                    <span className="w-fit font-bold">2.</span>
                    Unlike in waterfall method, QA role is to write test cases
                    and report bugs, in a scrum team QA has an extended role. QA
                    team takes part in the daily meetings along with all team
                    members. They are allowed to discuss with the business
                    analyst and development team. They are part of the test
                    planning phase. The team not only writes test cases but also
                    the acceptance test cases to provide support to the product
                    owner .Story estimation sessions will not happen without the
                    QA team. They help in providing more realistic estimates. In
                    short, the QA team is as equal to the development in the
                    scrum projects.
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
            <div className="w-full md:w-[500px]  text-left">
              {" "}
              <p className=" w-full flex  text-black mt-4 ">
                <span className=" text-left ">✔️</span> A use case in Scrum
                usually refers to how a software or system will interact with a
                users or systems.
              </p>
            </div>
            <div className="md:w-[500px] text-left ">
              {" "}
              <p className="w-full text-black flex text-left ">
                <span className="w-fit  ">✔️</span> Attain Scrum Principles and
                Skills
              </p>
            </div>

            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>Improve Team Collaboration
                and Management
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span>Ensure Smooth Agile
                Implementation
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> Become Part of a Community
                of Scrum Experts.
              </p>
            </div>
            <div className="w-full md:w-[500px] text-left">
              <p className="w-full text-black  ">
                <span className="w-full ">✔️</span> The scrum master helps
                to facilitate scrum to the larger team by ensuring the scrum
                framework is followed. He/she is committed to the scrum values
                and practices, but should also remain flexible and open to
                opportunities for the team to improve their workflow.
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
                      09-02-2023
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
                      09-03-2023
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

export default Scrum;
