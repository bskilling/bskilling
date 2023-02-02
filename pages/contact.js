import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const [message, setMessage] = useState(false);
  const isButtonVisble =
    watch("name") &&
    watch("email") &&
    watch("phone") &&
    watch("interest") &&
    watch("info");

  const submit = handleSubmit(async (data) => {
    const { name, email, phone, interest, info } = data;
    try {
      const response = await fetch(
        "https://bmx35e32jaxiqyqr46j3ow2nda0xrcdo.lambda-url.ap-south-1.on.aws",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            type: "contact",
            name,
            email,
            phone,
            interest,
            info,
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
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });

  return (
    <>
      <Head>
        <title>SFJ Business Solutions | Contact</title>
        <meta name="description" content="SFJ Business Solutions Contact Us" />
      </Head>
      <section className="pt-12 pb-12 text-zinc-900 bg-coustom1">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide text-green-900 md:ml-4 text-center">
            Contact
          </h1>

          <div className="flex flex-col-reverse md:flex-row justify-between items-start rounded pt-8 ">
            <div className="md:w-2/5 md:mt-0 mt-10 w-full">
              <p className="text-2xl font-semibold  md:ml-4">
                SFJ BUSINESS SOLUTIONS
              </p>
              <div className="grid gap-5 grid-cols-2 ">
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">
                    SFJ Business Solutions Pvt. Ltd.
                  </p>
                  <p> Uma Sree Dream World, Unit -2,</p>
                  <p>B-Block, 4th Floor, Kudlu Gate,</p>
                  <p>Hosur Main Road,</p>
                  <p>Bangalore – 560068. Karnataka, INDIA</p>
                  <p>Tel : +91 80 4158333</p>
                  <p></p>
                </div>
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">
                    SFJ Business Solutions Sdn. Bhd.
                  </p>
                  <p>Suite 23, 1B-15, Block 18, </p>
                  <p>Level 15, Plaza Sentral,</p>
                  <p>Jalan Stesen Sentral 5,</p>
                  <p>50470 Kuala Lumpur, Malaysia</p>
                  <p>Tel : +603-9236 1125</p>
                  <p>Fax : +603-9236 1122</p>
                </div>
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">SFJ Computers Consulting</p>
                  <p>
                    214, Blue Tower, Sheikh Zayed Road, (Next To Crown Plaza
                    Hotel)
                  </p>
                  <p>P.O. Box : 58575, Dubai, UAE</p>
                  <p></p>
                  <p>Tel : +971 43 425125</p>
                  <p>Fax : +971 43 425126</p>
                </div>

                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">
                    SFJ Business Solutions Pte. Ltd.
                  </p>
                  <p>35 Selegie Road, #09-02,</p>
                  <p>Parklane Shopping Mall,</p>
                  <p>Singapore – 188367</p>
                </div>
                <div className="text-base pt-8 text-black md:ml-4">
                  <p className="font-semibold">SFJ Business Solutions LLC</p>

                  <p>2055, limestone RD STE 200-C,</p>
                  <p> Wilmington,</p>
                  <p>DE 19808, USA</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="md:pl-12 md:pt-0 pt-12">
                <h2 className="text-2xl text-black ">Write to us</h2>
                <div className="mt-8">
                  <div className="lg:grid flex flex-col justify-center lg:grid-cols-2 gap-x-6 gap-y-3">
                    <div className="flex flex-col">
                      <span className="text-black">Name</span>
                      <input
                        type="text"
                        className="block  w-full lg:h-[50px] rounded-sm  border border-green  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        {...register("name", {
                          required: true,
                        })}
                      />

                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.name ? "visible" : "invisible"
                        }`}
                      >
                        This field is required
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-black">Email</span>
                      <input
                        type="email"
                        className=" block w-full rounded-sm border border-green  lg:h-[50px]  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        {...register("email", {
                          required: true,
                          pattern:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
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
                    </label>
                    <label className="block">
                      <span className="text-black">Phone</span>
                      <input
                        type="number"
                        className=" block  rounded-sm w-full lg:h-[50px] border border-green focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                        placeholder=""
                        {...register("phone", {
                          required: true,
                          minLength: 10,
                        })}
                      />
                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.phone ? "visible" : "invisible"
                        }`}
                      >
                        {errors.phone?.type == "required"
                          ? "This field required"
                          : "Please enter a valid phone number"}
                      </label>
                    </label>

                    <label className="block">
                      <span className="text-black">
                        What are you looking for?
                      </span>
                      <select
                        {...register("interest", {
                          required: true,
                        })}
                        className=" block w-full  border border-green  h-[50px] rounded-sm  focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                      >
                        <option>Knowledge As A Service</option>
                        <option>Talent As A Service </option>
                        <option>Consulting/IT Services.</option>

                        <option>Others</option>
                      </select>
                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.interest ? "visible" : "invisible"
                        }`}
                      >
                        This field is required
                      </label>
                    </label>
                  </div>
                  <label className="block mt-6">
                    <span className="text-black">Additional details</span>
                    <textarea
                      className="mt-1 block w-full border border-green  lg:h-28 rounded-sm  focus:border-green-700 focus:ring focus:ring-green focus:ring-opacity-50"
                      rows="3"
                      {...register("info", {
                        required: true,
                      })}
                    ></textarea>
                    <label
                      className={`text-red-600   text-xs py-1 ${
                        errors.info ? "visible" : "invisible"
                      }`}
                    >
                      This field is required
                    </label>
                  </label>
                  <div className="w-full flex justify-center items-center">
                    {message ? (
                      <p className="text-green text-md font-semibold pt-6 ">
                        {`Your message is sent. We'll get back to you at the earliest`}
                      </p>
                    ) : (
                      <button
                        onClick={submit}
                        disabled={!isButtonVisble}
                        className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${
                          isButtonVisble ? "opacity-100" : "opacity-50 "
                        }`}
                      >
                        SEND
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2856438459257!2d77.63598241536467!3d12.889345220163921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b089698d85%3A0x9b02d066823e0b2d!2sSFJ%20Business%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1657910713116!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
{
  /* <button className={`w-32 mt-6 bg-orange text-black font-bold text-xs   p-3 rounded-sm transition-all ${name && email && phone && info && interest?"opacity-100":"opacity-25"}`}>
SEND
</button> */
}
