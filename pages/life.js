import Image from 'next/image'
import Head from 'next/head'

export default function Life() {

  const stuff = [
    { image: "/fac/f1.jpeg", text: "Caption" },
    { image: "/fac/f2.jpeg", text: "Caption" },
    { image: "/fac/f3.jpeg", text: "Caption" },
    { image: "/fac/f4.jpeg", text: "Caption" },
    { image: "/fac/f5.jpeg", text: "Caption" },
    { image: "/fac/f6.jpeg", text: "Caption" },
    { image: "/fac/f7.jpeg", text: "Caption" },
    { image: "/fac/f8.jpeg", text: "Caption" },
    { image: "/fac/f9.jpeg", text: "Caption" },
    { image: "/fac/f10.jpeg", text: "Caption" },
    { image: "/fac/f11.jpeg", text: "Caption" },
    { image: "/fac/f12.jpeg", text: "Caption" },
    { image: "/fac/f13.jpeg", text: "Caption" },
    { image: "/fac/f14.jpeg", text: "Caption" },
    { image: "/fac/f15.jpeg", text: "Caption" },
    { image: "/fac/f16.jpeg", text: "Caption" },
  ]

  return (
    <>
    <Head>
        <title>SFJ Business Solutions | life </title>
        <meta
          name="description"
          content="Celebrations at SFJ are not just special occasions, but a way of life."
        />
      </Head>
      <section className="pt-12 pb-24 text-black bg-coustom1">
        <div className='md:container p-4 mx-auto'>
          <h1 className="text-4xl   text-bold  w-full  text-center   text-black">Life@SFJ</h1>

          <p className='py-12'>{`Celebrations at SFJ are not just special occasions, but a way of life. Our people are the very foundation on which we continue to deliver success to our growing customer base worldwide. When you walk into an SFJ campus, you not only meet skilled and committed teams, but there is a lot of fun and camaraderie on offer. We at SFJ strongly believe in building and maintaining a stress-free, people-friendly workplace where work and fun are not different elements, but one.`}</p>
          {/* <ul className='list-disc list-inside p-6'>
            <li>Quality Control Laboratory including fully operational Microbiology Lab for testing of raw materials, in-process checks for semi-finished products, finished products & packaging materials.</li>
            <li className='mt-4'>Equipped with facilities to manufacture up to 6-7 metric tons of produce every day ranging in batch sizes of 300Kgs, 600Kgs, 2000Kgs, 3000Kgs, 4000Kgs.</li>
          </ul> */}

          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-9 gap-4 pt-6">
            {stuff.map(({ image, text }, index) => (
              <div key={index} className="flex flex-col justify-center items-start rounded-sm">
                <div className="w-full h-96 md:w-[324px] md:h-72 bg-zinc-100 shadow-sm relative">
                  <Image layout='fill' alt="" src={image} className="absolute inset-0 object-cover" />
                </div>
                {/* <p className="prose-sm pt-4 text-zinc-700 leading-6">{text}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
