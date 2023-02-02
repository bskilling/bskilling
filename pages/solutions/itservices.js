import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
function Itservices() {
  return (
    <>
      {" "}
      <Head>
        <title>SFJ Business Solutions | IT Services</title>
        <meta
          name="description"
          content="Business leaders are investing in next generation digital
              technologies to their strategic advantage, optimizing business
              operations and driving new products and services"
        />
      </Head>
      <div className="bg-coustom1">
        <div className="w-full bg-coustom1 h-72 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/ouroffering/it1.jpg"
            objectFit="cover "
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative  h-full flex justify-center items-center">
              <h1 className=" text-4xl   text-bold  w-full     text-white">
                IT Services
              </h1>
            </div>
          </div>
        </div>
        <section className="text-black  ">
          <div className="container px-5 py-24 mx-auto">
            <p>
              Business leaders are investing in next generation digital
              technologies to their strategic advantage, optimizing business
              operations and driving new products and services. Organizations
              are constantly riddled with the challenge of changing wheels
              on-the-go to remain competitive. This requires a clear vision and
              strategy for agility and scale. We have more than a decade of
              experience in working with Fortune 500 companies, small and
              mid-sized enterprises in digital transformations focused on
              revenue optimization, cost reduction, process enhancements, while
              ensuring business continuity for our clients. Our consultants
              possess a deep expertise in BFSI, Manufacturing, Healthcare,
              Retail, Logistics, and other domains. SFJ is a partner of
              Automation Anywhere, Microsoft and is a trusted partner in
              defining your IT strategy and achieving your business goals.
            </p>
          </div>
        </section>

        <section className="text-black flex flex-col">
          <div className="container mx-auto lg:gap-16  flex px-5 py-14 md:items-start items-center md:flex-row flex-col ">
            <div className="lg:flex-grow md:w-1/2  flex  flex-col  text-left  md:mb-0  ">
              <h1 className="text-3xl mb-4  text-black">Keep the lights on</h1>
              <p className="mb-8 leading-relaxed">
                Digital transformations are not just about adopting new
                processes, technologies, but also about doing it with minimal
                disruptions to ongoing business operations. We have been a
                trusted partner for our clients to do both. Through a strong
                network of consultants and support teams with multi-domain
                experience around the world, we provide organizations with the
                end-end support in consulting, development and maintenance,
                production support, and other managed services. We also
                specialize in SAP and Oracle implementations.
              </p>
              <p className="mb-4">
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
            <div className="h-80 lg:w-1/2 w-full flex items-start  relative">
              <Image
                className=""
                layout="fill"
                objectFit="cover"
                alt="ser"
                src="/solutions/flexible.jpg"
              />
            </div>
          </div>

          <div className="container mx-auto lg:gap-16  flex px-5 py-14 md:items-start items-center md:flex-row flex-col ">
            <div className="h-80 w-full lg:w-1/2 flex items-start  relative">
              <Image
                className=""
                layout="fill"
                objectFit="cover"
                alt="ser"
                src="/solutions/domore.png"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2  flex  flex-col  text-left  md:mb-0  ">
              <h1 className="text-3xl mb-4  text-gray-900">
                Do more with less
              </h1>
              <p className="mb-8 leading-relaxed">
                IT infrastructure teams are often grappling with the complex
                challenges of managing legacy and modern systems hosted on
                different environments and at different stages of their life
                cycle. Maximizing the value out of these assets by enhancing
                performance, scalability, security and ease of maintenance are
                critical for any business in a constantly changing environment.
                We at SFJ help you adopt a holistic approach towards enterprise
                IT, which involves the right policies, teams, processes, and the
                technical know-how to make the right build vs buy decisions, so
                that you can do more with less.
              </p>
              <p className="mb-4">
                {" "}
                <Link href="/contact">
                  <a className="active:text-red font-bold underline hover:text-orange decoration-emerald-600 text-emerald-600">
                    Get in touch
                  </a>
                </Link>{" "}
                to know more.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Itservices;
