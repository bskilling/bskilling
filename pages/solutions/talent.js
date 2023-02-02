import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
function Talent() {
  return (
    <>
      <Head>
        <title>SFJ Business Solutions | Talent As A Service</title>
        <meta
          name="description"
          content=" People are the key ingredient to the success of any project or
          initiative. Getting people on-boarded on-time within the budget is
          always a challenge.s"
        />
      </Head>
      <div className="bg-coustom1">
        <div className="w-full h-72 relative ">
          <Image
            layout="fill"
            alt="ser"
            className="brightness-75"
            src="/ouroffering/talent1.jpg"
            objectFit="cover "
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative  h-full flex justify-center items-center">
              <h1 className=" text-4xl   text-bold  w-full     text-white">
                Talent As A Service
              </h1>
            </div>
          </div>
        </div>
        <section className="text-black  ">
          <div className="container px-5 py-24 mx-auto">
            <p>
              People are the key ingredient to the success of any project or
              initiative. Getting people on-boarded on-time within the budget is
              always a challenge. This is where our expertise can help you. We
              have a strong network of skilled professionals who can be staffed
              quickly across multiple roles, and many of our customers have
              realized enhanced productivity, reduced staffing and recruitment
              costs by partnering with us. We deploy talent with not just the
              right skills, but also the right attitude and experience needed
              for your projects. We also specialize in deploying SAP, Oracle
              professionals and senior executive hiring.{" "}
              <span className="mb-5">
                Click&nbsp;
                <Link href="https://sfjbs.talentrecruit.com/">
                  <a className="active:text-red underline font-bold decoration-green hover:text-orange text-green">
                    here
                  </a>
                </Link>
                &nbsp;to view our portfolio of roles.
              </span>
            </p>
          </div>
        </section>

        <section className="text-black flex flex-col">
          <div className="container mx-auto lg:gap-16  flex px-5 py-14 md:items-start items-center md:flex-row flex-col ">
            <div className="lg:flex-grow md:w-1/2  flex  flex-col  text-left  md:mb-0  ">
              <h1 className="text-3xl mb-4  text-black">Flexible Staffing</h1>
              <p className="mb-8 leading-relaxed">
                We offer a diverse portfolio of staffing services tailored to
                your business needs. We specialize in full-time, part-time,
                long-term and short-term staffing models, covering a wide
                spectrum of roles from software engineers to CXOs. Our talent
                supply chain is agile and precise, helping you focus on your
                core activities and reduce operational costs while improving
                productivity. We have helped many of our clients optimize their
                talent mix, minimizing the need for full-time hires.
              </p>
              <p className="mb-4">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline decoration-green hover:text-orange text-green">
                    Get in touch
                  </a>
                </Link>
                &nbsp;to know more.
              </p>
            </div>
            <div className="h-80 w-full lg:w-1/2 flex items-start  relative">
              <Image
                className=""
                layout="fill"
                objectFit="cover"
                alt="ser"
                src="/solutions/flexible.jpg"
              />
            </div>
          </div>

          <hr />
          <div className="container mx-auto lg:gap-16  flex px-5 py-14 md:items-start items-center md:flex-row flex-col ">
            <div className="h-80 w-full lg:w-1/2 flex items-start  relative">
              <Image
                className=""
                layout="fill"
                objectFit="cover"
                alt="ser"
                src="/solutions/rpo.png"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2  flex  flex-col  text-left  md:mb-0  ">
              <h1 className="text-3xl mb-4  text-gray-900">RPO & MSP</h1>
              <p className="mb-4 leading-relaxed">
                Recruitment Process Outsourcing (RPO) is a full or partial
                transfer of the permanent recruitment process to an external
                provider who sources, screens, selects and onboards talent. RPOs
                hire for internal positions within the organization and act as
                an extension of the HR function, adhering to internal policies,
                processes, and culture. Operations can be ramped up or down
                based on a need basis.
              </p>
              <p className="mb-8 leading-relaxed">
                Managed Services Provision (MSP) refers to the management of
                sourcing and administration of temporary positions through
                contract employees by an external provider, using a network of
                firms focused on finding contingent labour. MSP typically helps
                in forecasting labour needs and ensure delivery, and is
                responsible for payroll management.
              </p>
              <p className="mb-4">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline decoration-green hover:text-orange text-green">
                    Get in touch
                  </a>
                </Link>
                &nbsp;to know more.
              </p>
            </div>
          </div>
          <hr />
          <div className="container mx-auto lg:gap-16  flex px-5 py-14 md:items-start items-center md:flex-row flex-col ">
            <div className="lg:flex-grow md:w-1/2  flex  flex-col  text-left  md:mb-0  ">
              <h1 className="text-3xl mb-4  text-gray-900">Strong Network</h1>
              <p className="mb-8 leading-relaxed">
                Our robust talent ecosystem has been built over several years of
                trust, and is constantly evolving in breadth and depth. Our
                network today consists of 30000+ SAP professionals, 10000+
                Oracle professionals, and thousands of others with diverse skill
                sets relevant for IT industry of the future. We have placed over
                15000 professionals in the last 5 years, including 200+ CXOs.
              </p>
              <p className="mb-4">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline decoration-green hover:text-orange text-green">
                    Get in touch
                  </a>
                </Link>
                &nbsp;to know more.
              </p>
            </div>
            <div className="h-80 w-full lg:w-1/2 flex items-start  relative">
              <Image
                className=""
                layout="fill"
                objectFit="cover"
                alt="ser"
                src="/solutions/network2.png"
              />
            </div>
          </div>
          <hr />
        </section>
      </div>
    </>
  );
}
export default Talent;
