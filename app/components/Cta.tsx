import Image from "next/image";
import Arrow from '@/public/assets/arrow.png'

export function Cta() {
  return (
    <div className="w-full rounded-[16px] py-[56px] px-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-600 via-purple-600 to-red-500 text-center lg:my-[60px] lg:px-[324px] lg:py-[89px] ">
      <h1 className="text-[32px] font-medium text-white lg:text-[56px] ">Monitor your website like a pro</h1>
      <p className="pt-6 text-[18px] text-white lg:pt-[48px] lg:text[18px]">Get a bird's eye view with our customizable dashboard!</p>
      
      <div className="mt-[40px] flex flex-col w-full items-center lg:flex-row lg:mt-[56px] lg:justify-center">
        <button className="py-4 px-8 bg-white w-fit rounded mt-4 text-[#4328eb] font-medium hover:bg-[#4328eb] hover:text-white transition-all duration-300">Try for free</button>

        <button className="py-4 px-8 gap-2 rounded mt-4 text-white font-medium flex w-full justify-center items-center lg:w-fit">Contact sales <span><Image src={Arrow} alt="Arrow" /> </span></button>
      </div>


    </div>
  )

}