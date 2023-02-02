import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
function Capabilities() {
  return (
    <>
      <Head>
        <title>SFJ Business Solutions |   Capabilities </title>
        <meta
          name="description"
          content="In today's digital business ecosystem where customers call
          the shots, organizations have to scramble through every data
          input available to acquire and retain customers."
        />
      </Head>
      <div className="w-full   h-72 relative ">
        <Image
          layout="fill"
          alt="ser"
          src="/capabi/capablities.jpg"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative   h-full flex justify-center items-center">
            <h1 className=" text-4xl   text-bold  w-full     text-white">
              Capabilities
            </h1>
          </div>
        </div>
      </div>
      <section
        className="pt-12 pb-10 text-zinc-900 bg-coustom1"
        id="capabilities"
      >
        <div className="md:container p-4 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 md:pt- pt-4">
            <div
              className="w-full md:block hidden h-[100px] lg:col-span-2  col-span-1 "
              id="Analytics"
            ></div>
            <div className="w-auto">
              <h2 className="text-xl">Analytics</h2>
              <p className="prose pt-8">
                In today&apos;s digital business ecosystem where customers call
                the shots, organizations have to scramble through every data
                input available to acquire and retain customers. The advent of
                low cost storage and digital convergence have drastically
                impacted the way data and analytics are used by businesses. The
                role played by data sciences in solving business problems is
                fast gaining momentum and helping business improve efficiencies,
                business growth and move into newer territories. Our team of
                experts can help you in analytics discovery, roadmap definition,
                and transition into a data-driven organization through advanced
                data visualization and recommendation engines powered by BigData
                and Machine Learning.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red underline font-bold hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>
                to know more.
              </p>
            </div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/analytics.jpg"
              />
            </div>

            <div
              className="w-full md:block hidden h-[100px] lg:col-span-2  col-span-1 "
              id="Consulting"
            ></div>
            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/consulting.jpg"
              />
            </div>

            <div className="w-auto">
              <h2 className="text-xl ">Consulting</h2>
              <p className="prose pt-8">
                Business leaders are investing in next generation digital
                technologies to their strategic advantage, optimizing business
                operations and driving new products and services. We have more
                than a decade of experience in working with Fortune 500
                companies, small and mid-sized enterprises in digital
                transformations focused on revenue optimization, cost reduction,
                process enhancements, while ensuring business continuity for our
                clients. Our consultants possess a deep expertise in BFSI,
                Manufacturing, Healthcare, Retail, Logistics, and other domains.
                SFJ is a partner of Automation Anywhere, Microsoft and is a
                trusted partner in defining your IT strategy and achieving your
                business goals.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Mobility"
            ></div>
            <div className="w-auto">
              <h2 className="text-xl ">Mobility</h2>
              <p className="prose pt-8">
                With more than 25 billion connected devices all over the world,
                we are at the cusp of a digital revolution, and reimagining new
                ways of work is an integral part of this shift. The big question
                many organizations face is how to harness this proliferation of
                mobiles to effectively engage with a smarter workforce. We can
                help you define an overall Mobility strategy, identify and
                evaluate processes that can be mobilized with enhanced business
                impact, and adopting the right solution architecture and choice
                of platforms, technologies that can cater to the identified
                needs while ensuring data security, scalability and usability.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/mobility.jpg"
              />
            </div>

            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Outsourcing"
            ></div>

            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/outsourcing.jpg"
              />
            </div>
            <div className="w-auto">
              <h2 className="text-xl ">Outsourcing</h2>
              <p className="prose pt-8">
                In this age of technology disruption, organizations are
                constantly riddled with the challenge of wheels on-the-go to
                remain competitive. This requires a clear vision and strategy
                for agility and scale. SFJ has an exceptional track record in
                managed IT services, and a customer retention ratio of over 90%
                over the past decade is a testimony to the disproportionate
                value we added to our customers businesses. We offer application
                development, maintenance and support services to help stabilize
                and scale your business operations. Through our just-in-time and
                cost-effective sourcing, skilling, staffing strategies, we have
                helped several organizations achieve their objectives with
                minimal disruptions to ongoing business operations.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>

            {/* <div
              className="w-full h-[100px] md:block hidden  lg:col-span-2  col-span-1 "
              id="Staffing"
            ></div>

            <div className="w-auto">
              <h2 className="text-xl ">Staffing</h2>
              <p className="prose pt-8">
                People are the key ingredient to the success of any project or
                initiative. Getting people on-boarded on-time within the budget
                is always a challenge. This is where our expertise can help you.
                We have a strong network of skilled professionals who can be
                staffed quickly across multiple roles, and many of our customers
                have realized enhanced productivity, reduced staffing and
                recruitment costs by partnering with us. We deploy talent with
                not just the right skills, but also the right attitude and
                experience needed for your projects. We also specialize in
                deploying SAP, Oracle professionals and senior executive hiring.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div> */}
            {/* <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/staffing.jpg"
              />
            </div> */}
            <div
              className="w-full md:block hidden  h-[100px] lg:col-span-2  col-span-1 "
              id="Upskilling"
            ></div>

           
            <div className="w-auto">
              <h2 className="text-xl ">Upskilling</h2>
              <p className="prose pt-8">
                The digital services eco-system as we know it is undergoing a
                paradigm shift. New stacks and standards are emerging faster
                than ever, and every organization with a digital footprint is
                under serious pressure to quickly build and maintain a
                future-ready workforce. It is no secret that even large
                corporations with immense resources at their disposal are
                struggling to cope with this challenge. Empowering workforce on
                the go requires deep expertise that can be brought within the
                time and cost allocated. Our knowledge services ecosystem is
                constantly connected/updated with experts who can deliver
                online/offline trainings on several in-demand technology skills
                for your project teams and campus recruits.
              </p>

              <p className="prose lg:mb-0 mb-5 pt-8">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div className="w-auto h-48 lg:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/capabi/upskilling.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Capabilities;
