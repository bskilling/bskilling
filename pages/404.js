import Image from "next/image";

function Pagenotfound(){
    return(
        <>
        <div className="w-screen h-screen  flex justify-center lg:flex-row flex-col  bg-blue ">
            

            <div className="lg:mt-[10%]">
                <p className="text-6xl text-white font-extrabold items-center font-mono">Page Not Found 404</p>
            </div>

        </div>
        </>
    )
}
export default Pagenotfound;