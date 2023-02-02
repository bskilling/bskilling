import Image from "next/image";
function project() {
  return (
    <>
      <section
        className="md:pt-12 pb-24 text-zinc-900 bg-slate-100"
        id="success-stories"
      >
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            SUCCESS STORIES
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-4 md:pt-12 pt-4">
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/projectfiles/projectimage1.jpg"
              />
            </div>

            <div className="w-auto">
              <h2 className="text-xl ">Lorem ipsum</h2>
              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                unde, laudantium non exercitationem ad dignissimos fugit magnam
                porro provident consectetur, similique temporibus voluptate
                expedita ratione explicabo quaerat, quam tempora tenetur.
                Numquam dicta quasi obcaecati, facilis deleniti magnam beatae
                molestias reiciendis.
              </p>

              <p className="prose pt-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates placeat fuga, quo dicta consequatur voluptatem quas
                voluptatum, vel vero magni ullam! Sit, doloribus enim
                consequuntur quo ea nesciunt temporibus culpa adipisci, ullam
                laborum natus quia perferendis nihil. Ipsa, autem ipsum.
              </p>
            </div>

            <div className="w-auto">
              <h2 className="text-xl ">Enabling Start-ups to Scale</h2>
              <p className="prose pt-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam sunt, aut, harum obcaecati accusantium porro
                inventore fuga ex fugiat ullam optio id, nam error explicabo
                quasi iusto veritatis labore! Pariatur perspiciatis culpa ea
                necessitatibus? Necessitatibus quae accusantium in reiciendis
                iure?
              </p>

              <p className="prose pt-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                vero ipsum quae eveniet voluptatem, cum, quibusdam quod
                doloremque quisquam natus numquam ea voluptatibus, maiores
                beatae! Aut corporis odio minus fugit.
              </p>
            </div>

            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/projectfiles/projectimage2.jpg"
              />
            </div>

            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/projectfiles/projectimage3.jpg"
              />
            </div>

            <div className="w-auto">
              <h2 className="text-xl ">Pioneers in Innovation</h2>
              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                repudiandae modi eveniet accusamus! Quia dolor deserunt unde
                porro laborum officiis iusto laboriosam magnam accusamus
                asperiores sit vero nesciunt facilis tenetur, non neque
                consequatur, exercitationem nemo et saepe dolores quos. Dolores.
              </p>

              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iste a laudantium quia quasi. Voluptate nulla nobis,
                neque autem consectetur error nisi dolorem perspiciatis. Error
                qui excepturi magni iste non commodi iusto ipsam, vitae
                doloribus sunt impedit, architecto iure sit.
              </p>
            </div>

            <div className="w-auto">
              <h2 className="text-xl ">Campus Connect</h2>
              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos error ut, libero, est possimus, fuga consequatur
                dolorum nostrum obcaecati quis similique earum ea repudiandae
                dolore pariatur saepe maiores nulla consequuntur eos deserunt
                placeat! Ratione, illum id? Veritatis harum molestias error.
              </p>

              <p className="prose pt-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                consequatur voluptatem ipsam voluptates quod eius inventore
                consequuntur in, quis repellat recusandae magni totam facere
                deserunt dolore quos. Dolore eaque sequi ad maxime possimus nisi
                vel impedit necessitatibus odit illo. Quo?
              </p>
            </div>

            <div className="w-auto h-48 md:h-auto relative">
              <Image
                layout="fill"
                className="absolute h-full w-full object-cover"
                alt=""
                src="/projectfiles/projectimage4.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default project;
