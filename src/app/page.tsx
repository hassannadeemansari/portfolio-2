import Link from "next/link";
import Image from "next/image";

export default function Myportfolio() {
  return (


<div>


     <div className=" max-w-screen 2xl:max-w-[1600px] h-[100vh] 2xl:h-[720px] bg-gradient-to-r from-[#4b4949] via-[#7E7E7E] to-[#989898] mx-auto flex items-center flex-col ">
          <div className="
            absolute inset-0 
            w-full 
            h-screen sm:h-[auto] md:h-[520px] 
            bg-[url('/web.png')] bg-no-repeat bg-top bg-contain 
            brightness-100 hover:brightness-0 transition-all duration-2000
            mt-4 sm:mt-4 md:mt-0 xl:mt-7 xl:ml-4 
            xl:w-[1310px] 2xl:w-[1510px]
            sm:opacity-100
            opacity-95
            
          "></div>

          <header className="md:w-[50%] sm:w-[70%] w-[80%] h-16  bg-white opacity-35 rounded-full flex justify-evenly items-center sm:mt-16 mt-40 shadow shadow-xl shadow-[#4b4949]">
              <Link className="hover:font-bold hover:text-black hover:underline" href="#">Home</Link>
              <Link className="hover:font-bold hover:text-black hover:underline" href="#">About</Link>
              <Link className="hover:font-bold hover:text-black hover:underline" href="#">Skills</Link>
              <Link className="hover:font-bold hover:text-black hover:underline" href="#">Work</Link>
              <Link className="hover:font-bold hover:text-black hover:underline" href="#">Contact</Link>
          </header>

          <div className="w-full block z-20 text-[#56514e] flex justify-evenly top-56 relative">
              <div>{`[Instagram]`}</div>
              <div>{`[Github]`}</div>
              <div>{`[Linkdin]`}</div>
              <div>{`[Facebook]`}</div>
          </div>


          <div className="z-10 ">
             <Image
             src="/pic.png"
             alt="pic"
             className=" "
             width={400}
             height={400}
             />
          </div>



    </div>



    {/* second sec */}


        <div className="max-w-screen 2xl:max-w-[1600px] h-[100vh] 2xl:h-[720px] bg-gray-200 ">

        <span className="text-4xl font-bold">About Me:</span>

          <div className="w-full h-46 flex sm:flex-row gap-6 flex-col text-[#3B4756] relative top-24">
              <div className="sm:w-[50%] w-[90%] text-3xl font-bold font-sans ml-8">Hello! My name is Hassan Nadeem, <br/> I'm freelancer web-developer with <br/> 2 year of experience</div>
              <div className="sm:w-[50%] w-[100%] flex sm:justify-center sm:ml-0 ml-8">My goal is to create websites that not only <br/> reflect the client’s brand identity but also drive <br/> their business objectives</div>
          </div>

            
        </div>





    </div>
  )
}