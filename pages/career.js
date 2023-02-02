import Image from "next/image";
import { FaAddressBook } from "react-icons/fa";

import useCollapse from "react-collapsed";
import { useState } from "react";
import Careercard from "../components/careercard";
export default function Career() {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  useCollapse({ isExpanded1 });

  const careerdata = [
    {
      id: 0,
      title: "Inside Sales",
      type: " Full-time/Contract",
      point: [
        {
          name: "This role would be part of the B2B sales function for our India and US, Europe, ME, SEA and ANZ. He/she would drive the new customer acquisition, customer relationship management, Operations & reporting",
        },
        {
          name: " Communicating with customers, making outbound calls to potential customers, and following up on leads",
        },
        {
          name: " Understanding customers' needs and identifying sales opportunities",
        },
        {
          name: "Answering potential customers' questions and sending additional information per email",
        },
        {
          name: " Keeping up with product and service information and updatesS",
        },
        {
          name: "Creating and maintaining a database of current and potential customers",
          name: " Explaining and demonstrating features of services",
          name: " Staying informed about competing services",
          name: " Upselling products and services",
          name: " Researching and qualifying new leads",
          name: " Closing sales and achieving sales targets",
          name: "Proactively identifying cross-selling/up-selling opportunities with the existing customers",
          name: " Identifying references through the existing customer base to increase the sales pipeline",
          name: " Experience in data mining process and Email Marketing is mandate",
          name: "  Outbound Call, Digital Marketing and Knowledge in using any of the CRM tool is an advantage",
          name: "  Experience Level 1 to 4 Years",
        },
      ],
      role: "Sales Representative",
    },
    {
      id: 1,
      title: "Java Stack",

      point: [
        {
          name: "Develop new API'S as part of a microservice architecture using Spring boot",
        },
        { name: "Strong problem solving skills" },
        { name: "Hands-on approach for technical challenge faced by the team" },
        {
          name: "Good working exposure to relational database like Oracle, MySQL, Postgresql, etc",
        },
        {
          name: "Experience working with Bootstrap, Java, React-native, Nodejs, Express, etc",
        },
        { name: "Excellent communication skills" },
        { name: "Experience in developing web applications" },
        {
          name: "Ability to take initiative and handle multiple priorities in a fast-paced environment",
        },
      ],
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
    },
    {
      id: 2,
      title: "Hadoop",
      type: " Full-time/Contract",
      point: [
        { name: "Data management" },
        { name: "RDBMS" },
        { name: "Consulting" },
        { name: "Data Mining" },
        { name: "Python" },
        { name: "Business Process" },
        { name: "NoSQL" },
        { name: "Data Processing" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 3,
      title: "React JS",
      type: " Full-time/Contract",
      point: [
        { name: "Work Experience as Front end developer" },
        { name: "Experienced in javaScript , react and knowledge typeScript" },
        { name: "Write well documented and clean codes " },
        { name: "Able to build react native ios android application" },
        { name: "Build and maintain React native application" },
        { name: "Integrate backend and third party Api's" },
        { name: "Strong Data Structure and Algorithms skills" },
        { name: "HTML, CSS, JavaScript, React, Redux,.. etc" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 4,
      title: "Snowflake",
      type: " Full-time/Contract",
      role: "Developer/Consultant/Architect",
      point: [
        {
          name: "Lead technical pieces of client data warehouse implementations and on-boarding efforts",
        },
        {
          name: "Work with the other Customer Engagement and Delivery matrix resources to ensure proper technical guidance, project management and functional support",
        },
        {
          name: "Strong database and data warehouse experience, including recent experience writing and tuning complex SQL queries",
        },
        {
          name: "Experience and understanding of large-scale infrastructure-as-a-service platforms (e.g. Amazon AWS, Microsoft Azure, OpenStack)",
        },
        { name: "Data Warehousing" },
        { name: "Tableau" },
        { name: "spark" },
        { name: "ETL" },
      ],
    },
    {
      id: 5,
      title: "Teradata",
      type: " Full-time/Contract",
      point: [
        { name: "Aware of data modelling concepts and ETL - EDW Concepts" },
        {
          name: " Hands on experience in delivering Teradata Datawarehouse solutions",
        },
        { name: "Aware of data modelling concepts and ETL - EDW Concepts." },
        {
          name: "Exposure to All Teradata utilities particularly TPT, Fastload, Multiload, BTEQ, Fast-Export, Tpump",
        },
        { name: "Prior work experience in the Teradata - GCFR / TCF modules" },
        {
          name: "Experience with analysis, design, development, customizations and implementation of Change Requests for Teradata",
        },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 6,
      title: "Data Sciences",
      type: " Full-time/Contract",
      point: [
        { name: "Advanced analytical skills" },
        { name: "Artificial Intelligence" },
        {
          name: "Knowledge of statical techniques and machine learning algorithms",
        },
        { name: "Natural language processing" },
        { name: "Advanced Excel, Powerpoint skills" },
        {
          name: "Advanced communication (written and oral) and strong interpersonal skills",
        },
        { name: "Knowledge on google cloud platform" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 7,
      title: "Azure Data Bricks/ADF ",
      type: " Full-time/Contract",
      point: [
        {
          name: "Abitlity to learn and grasps concept quickly in a fast-paced environment",
        },
        {
          name: "Great problem-solving skills and outstanding deive for results",
        },
        {
          name: "Commitement to collaborate with others and deliver quality work",
        },
        {
          name: "Self-starter, who proactively identifies problems and drives for resolution.",
        },
        {
          name: "Experience with Synapse, ADF Development & Orchestration and Strong SQL is must. Engineer should be very strong and excellent hands-on in the same stack.",
        },
        { name: "Experience with Azure should be excellent." },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 8,
      title: "Azure",
      type: " Full-time/Contract",
      point: [
        { name: "Years of Experience 5 to 10 Years" },
        { name: "Capacity to handle teams with leadership attitude" },
        {
          name: "Deep understanding of Azure Cloud services like IaaS, PaaS & SaaS",
        },
        {
          name: " Direct experience of enterprise solution shaping and Microsoft Azure Cloud architecture development including excellent documentation skills",
        },
        {
          name: "Understanding of how to build resilient multi-site architectures",
        },
        { name: " Guiding developers and operation teams in case of an issue" },
      ],
      role: "Developer/Consultant/Architect",
    },

    {
      id: 9,
      title: "Fullstack",
      type: " Full-time/Contract",
      point: [
        {
          name: " Required full stack developer and mandatory to have knowledge on frontend and backend skills : Java, Spring Boot, Microservices, Angular, Database skills",
        },
        { name: "Requirement is for 4-5 yrs. of experience (B2 Grade)" },
        { name: " Knowledge on Azure would be an advantage" },
        {
          name: "Experienced with service development: Writing code, Unit Testing, debugging",
        },
        { name: "Comfortable in using Git, branching, and merging" },
        { name: "Dot Net, C#, SQL Server, and Angular" },
      ],
      role: "Developer",
    },
    {
      id: 10,
      title: "Network Data",
      type: " Full-time/Contract",
      point: [
        { name: " Determines cost-effective ways to manage the network" },
        { name: " Develops department design standards" },
        {
          name: "Promotes advancement of automation and orchestration tools across the environment",
        },
        {
          name: "Ensures the designs promote ultimate availability and compliance with security standards",
        },
        {
          name: "Provides management level recommendations for optimization, budget, new technology",
        },
        {
          name: "Participates in rotating on-call operational support as well as project deployments",
        },
        { name: "In-depth knowledge of LAN switch technology" },
        { name: "Expert knowledge of VPN technologies" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 11,
      title: "Ericsson Network  Integration",
      type: " Full-time/Contract",
      point: [
        { name: "Plan the implementation of the product configuration" },
        {
          name: "Implement configuration, integration, migration, and customer acceptance test",
        },
        { name: "Scope, define and design UDM integration offerings" },
        {
          name: "Provide global service delivery to telecommunication operators all over the world",
        },
        {
          name: "Implement configuration, integration, migration, and customer acceptance test",
        },
        { name: "Tackle technical problems during service delivery" },
      ],
      role: "Developer",
    },
    {
      id: 12,
      title: "VMware VDI, Horizon View",
      type: " Full-time/Contract",
      point: [
        {
          name: "Configure, manage and maintain the VMware, VMware horizon view and windows server infrastructure",
        },
        {
          name: " Responsible for build of server and VMWare related software and hardware",
        },
        { name: " Working experience on VMware horizon view" },
        {
          name: "Strong knowledge on Virtual desktop infrastructure management",
        },
        {
          name: "Strong knowledge on Active directory ,group, policy management",
        },
        { name: " Strong knowledge PowerShell and PowerShell CLI" },
        { name: "Data center understanding" },
        { name: "Experience with hardware platforms" },
      ],
      role: "Architect",
    },
    {
      id: 13,
      title: "IFS EAM",
      type: " Full-time/Contract",
      point: [
        { name: " IFS Implementation Profile" },
        {
          name: "Experience ? 3 to 14 years if IFS EAM module Experience with at least 1",
        },
        { name: "End-to-End IFS Implementation Project" },
        { name: "presentation skills" },
        { name: "problem solving" },
        { name: "data collection" },
        { name: "communication skills" },
      ],
      role: "Consultant",
    },

    {
      id: 14,
      title: "DFT",
      type: " Full-time/Contract",
      point: [
        { name: "FULL CHIP EXPOSURE" },
        { name: "END TO END PRODUCT Involvement" },
        {
          name: "Experience in JTAG, MBIST, Scan Insertion, Scan Compression, ATPG, Fault Simulation",
        },
        {
          name: "Experience with industry ATPG tools Synopsys Tetra MAX, Cadence Encounter",
        },
        {
          name: "Test or Mentor Fast Scan ATPG tools Synopsys DFT scan insertion",
        },
        {
          name: "Experience with industry simulation tools such as VCS, Modelsim, NC Verilog etc",
        },
        {
          name: "Synapse Quest Hiring DFT Engineer with 2-20 + Years of Experience(Engineer to Director Position)",
        },
      ],
      role: "Developer",
    },
    {
      id: 15,
      title: "Corporate Treasury",
      type: " Full-time/Contract",
      point: [
        { name: "The candidate will be expected to lead" },
        { name: " The assignments would include providing advisory" },
        {
          name: "  Strong understanding of corporate treasury operations and financial products",
        },
        {
          name: " The candidate will be expected to coach junior team members to ensure excellent client delivery whilst also enabling their career development",
        },
        { name: "Well-versed in MS Excel, MS PowerPoint and Power BI" },
        {
          name: "Knowledge of Analytical tools like Alteryx and Tableau is preferred",
        },
      ],
      role: "Manager",
    },
    {
      id: 16,
      title: "CAD",
      type: " Full-time/Contract",
      point: [
        {
          name: "Solution Development, Solution Implementation, Rollout and Application Support using Proficy Plant Apps",
        },
        { name: "Experience on performance monitor Tools" },
        {
          name: "Experience on PA Database and PA Table Structure including customization using SQL Stored Procedures. Should know Coding best practices",
        },
        {
          name: "Proficy-3rd Party Tool Integration, Proficy SDK, .Net and Visual Basic",
        },
        { name: "Should be flexible at work timings/work in shifts" },
        { name: "Database: SQL Server" },
      ],
      role: "Developer",
    },
  ];

  const careerdata1 = [
    {
      id: 1,
      title: "SAP BODS ",
      type: " Full-time/Contract",
      point: [
        { name: "Experience in BDOS Design and architecture" },
        {
          name: "Knowledge of developing real time interface like IDOC, BAPI SAP applications BODS",
        },
        { name: "Sound knowledge of SAP BODS" },
        { name: "Experience in Data Migration Projects" },
        {
          name: "Must have experience of installation and configuration of SAP BODS",
        },
        {
          name: "Should be Able to provide the estimation on BDOS work effort",
        },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 2,
      title: "SAP BW",
      type: " Full-time/Contract",
      point: [
        { name: "Experience with design phase of ERP transformation" },
        {
          name: "Knowledge of cost modelling and understanding of how cost allocations are done",
        },
        { name: "Alteryx Certification (Core or/and Advanced)" },
        { name: "Working knowledge of SAP crystal reports" },
        {
          name: "Experience of large enterprise applications (SAP, Oracle, Salesforce, etc.)",
        },
        { name: "emonstrated problem solving and critical thinking skills" },
        {
          name: "Hands on experience in SAP Profitability and Performance Management (PaPM)",
        },
        {
          name: "Ability to understand how BW/4 HANA / Native HANA Model will be aligned with PaPM Model",
        },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 3,
      title: "SAP BW/4 HANA",
      type: " Full-time/Contract",
      point: [
        { name: "Design and build Data Warehouse models in SAP BW" },
        {
          name: "Data Load from SAP HR Systems i.e. SAP S4HANA, SAP SuccessFactors Cloud to SAP BW4HANA",
        },
        {
          name: "Experience in building BI reports, on tools like SAP BO, SAP Analytics Cloud.",
        },
        {
          name: "Ability to take ownership of solutions, from design stage to deployment.",
        },
        { name: "Support testing CIT/E2E/UAT" },
        { name: "Analyse code and review designs" },
        { name: "Experience on cloud platforms a plus" },
        { name: "Work with geographically diverse development teams" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 4,
      title: "SAP SuccessFactors",
      type: " Full-time/Contract",
      point: [
        {
          name: "+5 Year experience in complex SuccessFactors / SAP HR implementations",
        },
        {
          name: "Experience in designing and/or implementing SuccessFactors (in lead roles)",
        },
        { name: "Certified in one or more SuccessFactors modules" },
        { name: "Strong communication and leading skills" },
        { name: "Fluent in English and fluent in Dutch and/or French (must)" },
        { name: "Willingness to travel" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 5,
      title: "Salesforce",
      type: " Full-time/Contract",
      point: [
        {
          name: "Follow standard procedures for proper escalation of unresolved issues to the appropriate internal team",
        },
        { name: "SFDC" },
        { name: "Presales" },
        { name: "Prepare accurate and timely reports" },
        { name: "Provide prompt and accurate feedback to customers" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 6,
      title: "Oracle/OIS/Finance",
      type: " Full-time/Contract",
      point: [
        { name: "Proficient computer usage" },
        { name: "debugging skills" },
        {
          name: "Knowledge of sound professional experience with Microsoft based server operating systems",
        },
        { name: " real-time access to live financial data" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 7,
      title: "Salesforce",
      type: " Full-time/Contract",
      point: [
        { name: " Sales Cloud Einstein" },
        { name: "Service Cloud Einstein" },
        { name: "CRM Analytics" },
        { name: "Knowledge of web coding including HTML and CSS." },
        { name: "Strong Communications skills" },
        { name: "Ability to solve problem sets" },
        { name: "Testing the stability and functionality of the application" },
        { name: "Troubleshooting and fixing bugs" },
        {
          name: "Writing documents and providing technical training for Salesforce staff",
        },
      ],
      role: "Developer/Consultant/Architect/Trainer",
    },
    {
      id: 8,
      title: "BDM/CSM",
      type: " Full-time/Contract",
      point: [
        {
          name: "Determination, Persistency and Ability to add new clients nationwide",
        },
        {
          name: "Ability to select new leads and prospects and generate call lists",
        },
        {
          name: "Cold calling and worm calling skills, and experience dealing with objections and managing objections",
        },
        {
          name: "email marketing campaigns experience and ability to manage all states of prospecting",
        },
        { name: "Consistently prospecting, pursuing and closing new business" },
        {
          name: "Developing and implementing long term relationships with all clients",
        },
        {
          name: "Proactively seek new avenues to penetrate clients and attract prospects",
        },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 9,
      title: "Windows Admin",
      type: " Full-time/Contract",
      point: [
        {
          name: " Minimum 5 years of relevant experience in Managing Windows, Office 365 AND VMware environments",
        },
        { name: " Experience of Exchange server and 0365 troubleshooting" },
        {
          name: " Installing and managing the 6.0 and 6.7 VMware environments",
        },
        { name: "Clear understanding of VMware Vsphere Virtualization" },
        { name: "Clear understanding of VMware Vsphere Virtualization" },
        { name: " Scripting knowledge is required (Powershell Batch file)" },
        { name: "Should be excellent in written and verbal communication" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 10,
      title: "IBM Storage SME (SAN)",
      type: " Full-time/Contract",
      point: [
        { name: "IBM SAN L3 Administrator" },
        { name: " Knowledge on IBM SVC" },
        { name: "Flash systems,V7000" },
        { name: "Knowledge on Cisco and brocade switches" },
        { name: "Knowledge on Dell ECS" },
        { name: "Provides deliverables in a timely and efficient manner" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 11,
      title: "OS Monitoring",
      type: " Full-time/Contract",
      point: [
        {
          name: "The position requires skills in crafting graphics using Grafana Dashboards",
        },
        {
          name: "Have experience and proven ability in crafting professional dashboards that give insight into sophisticated data sets",
        },
        { name: " Crafting automation to capture data from multiple sources" },
        { name: " Scripting ability in Perl, Powershell, Unix Scripting, etc" },
        { name: "Experience with centralized logging systems" },
        {
          name: " Experience with Elasticsearch would all be a strong advantage",
        },
        { name: "Experience with web and application server technology" },
        { name: "  Good knowledge of Linux and AIX operating systems a plus" },
      ],
      role: "Developer",
    },
    {
      id: 12,
      title: "ASP.NET MVC",
      type: " Full-time/Contract",
      point: [
        { name: "ASP.NET MVC" },
        { name: "OOPS" },
        { name: "C# (MVC / Asp. Net / ASP. Net Core)" },
        { name: "Knowledge about SQL Server" },
        { name: "JavaScript plus any one of (Vue JS/ Angular / React)" },
      ],
      role: "Developer/Consultant/Architect",
    },
    {
      id: 13,
      title: "PHP",
      type: " Full-time/Contract",
      point: [
        {
          name: "Role Software Engineer/Senior Software Engineer PHP/Cake PHP",
        },
        {
          name: "Application, Continuous Improvement and up gradation of Applications",
        },
        { name: "Database Management" },
        { name: " Database Administration" },
        { name: "Database Designing" },
        { name: "SQL Queries" },
        {
          name: " Provide technical support to users as a member of the IT team",
        },
        { name: "Support technology needs as per requirement" },
      ],
      role: "Developer",
    },
    {
      id: 14,
      title: "Python",
      type: " Full-time/Contract",
      point: [
        { name: "Write effective, scalable code" },
        {
          name: "Develop back-end components to improve responsiveness and overall performance",
        },
        { name: "Integrate user-facing elements into applications" },
        { name: "Test and debug programs" },
        { name: "Improve functionality of existing systems" },
        { name: "Implement security and data protection solutions" },
        { name: "Hands on experience in Docker and Rest API" },
        {
          name: "Expertise in at least one popular Python framework (like Django, Flask or Pyramid)",
        },
      ],
      role: "Developer",
    },
    {
      id: 15,
      title: "Kenan Software",
      type: " Full-time/Contract",
      point: [
        {
          name: "Solve various technical problems in the project in a collaborative manner under specified timeline with minimal guidance and review",
        },
        {
          name: " Responsible for implementing diverse engineering tasks including gap, data, and impact analysis ",
        },
        {
          name: "Independently perform low-level design configuration, code customization, refactoring and review",
        },
        {
          name: " Gain expertise and demonstrate high levels of skills in design, review, development, testing, build and deployment stages of the software life cycle",
        },
      ],
      role: "Developer",
    },
    {
      id: 16,
      title: "C",
      type: " Full-time/Contract",
      point: [
        { name: "Proficient in C language and Loves programming" },
        {
          name: "Requires computers software/communications/mathematics majors",
        },
        {
          name: "Familiarity with Linux/Unix OS and Android OS will have preference",
        },
        {
          name: "Support our customers in a professional and friendly manner even under suffering unfair treatment",
        },
        {
          name: "Can work under pressure. Need to work on weekend, holidays and even overnight if the project is urgent",
        },
      ],
      role: "Developer",
    },
  ];

  return (
    <div className="bg-coustom1">
      <div className="w-full h-80 relative bg-coustom1 ">
        <Image
          layout="fill"
          alt="ser"
          src="/edu&car/careers.png"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative    h-full flex justify-center items-center">
            <h1 className=" text-4xl   text-bold  w-full     text-white">
              Careers
            </h1>
          </div>
        </div>
      </div>
      <section className="text-black  ">
        <div className="container px-5 py-11 mx-auto bg-coustom1">
          <p>
            We are always on the lookout for talented, committed individuals and
            help them achieve their career goals by providing the right
            opportunities at the right time, tailored to each individual&apos;s
            preferences. We have successfully placed 15000+ professionals in the
            recent years in several Fortune 100 companies and MNCs, across
            several key roles. Our talent services cover a wide spectrum of
            roles in the digital ecosystem, from engineers, consultants,
            architects, and even CXOs. Sign-up with SFJ today and join a strong
            growing network of IT professionals.
          </p>
        </div>
      </section>

      <section className="text-black bg-coustom1 ">
        <div className=" container px-5 md:pt-14 md:pb-10 pt-7 pb-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl  text-center title-font text-black mb-4">
              Featured Technologies
            </h1>
          </div>
          <div className="flex  lg:flex-row flex-col  mb-8  w-full  gap-7 flex-wrap ">
            <div className=" flex flex-col gap-4  flex-1">
              {careerdata.map(
                ({ id, description, title, type, point, role }) => {
                  return (
                    <Careercard
                      key={`${id}-${title}`}
                      description={description}
                      title={title}
                      type={type}
                      role={role}
                      point={point}
                    />
                  );
                }
              )}
            </div>
            <div className=" flex gap-4 flex-col flex-1">
              {careerdata1.map(
                ({ id, description, title, type, role, point }) => {
                  return (
                    <Careercard
                      key={`${id}-${title}`}
                      description={description}
                      title={title}
                      type={type}
                      role={role}
                      point={point}
                    />
                  );
                }
              )}
            </div>
          </div>

          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </div>
  );
}
