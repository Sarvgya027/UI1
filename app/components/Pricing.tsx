import Image from "next/image";
import Check from '@/public/assets/check.svg';

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px] ">
      <h1 className="text-[#172026] text-center text-[24px] font-medium text-xl lg:text-[42px] ">Flexible plans for you</h1>
      <p className="pt-[16px] text-center text-[#36485C] pb-[40px] lg:text-p-[18px] ">No hidden fees!</p>


      <div className="flex flex-col gap-x-6 gap-y-6 lg:flex-row">
        <div className="w-full rounded-[8px] bg-zinc-100 p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-[#0085FF] text-[18px] lg:text-xl">Free Trial</h3>
            <p className="pt-[12px] lg:text-[18px] text-[#36485C]">Perfect for testing out features</p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-[#172026]">$0 <span className="text-[#36485C]">/ month</span></h2>

            <ul className="flex flex-col gap-y-2 mt-4 pt-4 text-[#5f7896]">
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
            </ul>
          </div>
          <button className="mt-4 rounded bg-white cursor-pointer hover:bg-gray-200 py-4 px-8 text-[#4328eb] font-medium">
            Start Trial
          </button>

        </div>
        <div className="w-full rounded-[8px] bg-[#4328eb] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">Free Trial</h3>
            <p className="pt-[12px] lg:text-[18px] text-white">Perfect for testing out features</p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-[#ffffff]">$0 <span className="text-white">/ month</span></h2>

            <ul className="flex flex-col gap-y-2 pt-4 mt-4 text-[#ffffff]">
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
            </ul>
          </div>
          <button className="mt-4 rounded bg-white cursor-pointer hover:bg-gray-200 py-4 px-8 text-[#0085FF] font-medium">
            Start Trial
          </button>

        </div>
        <div className="w-full rounded-[8px] bg-zinc-100 p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-[#0085FF] text-[18px] lg:text-xl">Free Trial</h3>
            <p className="pt-[12px] lg:text-[18px] text-[#36485C]">Perfect for testing out features</p>

            <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-[#172026]">$0 <span className="text-[#36485C]">/ month</span></h2>

            <ul className="flex flex-col gap-y-2 pt-4 mt-4 text-[#5f7896]">
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
              <li className="flex items-center gap-x-4">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </li>
            </ul>
          </div>
          <button className="mt-4 rounded bg-white cursor-pointer hover:bg-gray-200 py-4 px-8 text-[#0085FF] font-medium">
            Start Trial
          </button>

        </div>
      </div>
    </div>
  )
}