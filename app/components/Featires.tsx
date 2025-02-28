import Feature1 from '@/public/assets/feature-1.svg';
import Feature2 from '@/public/assets/feature-2.svg';
import Feature3 from '@/public/assets/feature-3.svg';
import Check from '@/public/assets/check.svg';
import BlueButton from '@/public/assets/blue-button.svg';
import GreenButton from '@/public/assets/green-button.svg';
import PinkButton from '@/public/assets/pink-button.svg';

import Image from 'next/image';

export function Features() {
  return (
    <div className="flex flex-col py-[56px] gap-y-[56px] lg:py-[120px] lg:gap-y-20">
      <div className="flex flex-col gap-x-6 lg:flex-row-reverse">
        <Image src={Feature1} alt="feature 1" className="hidden lg:block w-1/2" />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Sales Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Simplify your sales monitoring</h1>

          <Image src={Feature1} alt="feature 1" className="pt-[24px] sm:hidden" />
          <p className="pt-[24px] pb-[24px] text-[#36485C] lg:text-[18px]">Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span><Image src={Check} alt="check" /></span> Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span><Image src={Check} alt="check" /></span> Lorem ipsum dolor sit.
            </li>
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span><Image src={Check} alt="check" /></span> Lorem ipsum dolor sit amet.
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] lg:text-[18px] font-medium text-[#0085FF]">
            Learn More <span><Image src={BlueButton} alt="blue button" /></span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 lg:flex-row">
        <Image src={Feature2} alt="feature 2" className="hidden lg:block w-1/2" />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00a424] lg:text-[18px]">Customer Support</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Get in touch with your customers</h1>

          <Image src={Feature2} alt="feature 2" className="pt-[24px] sm:hidden" />
          <p className="pt-[24px] pb-[24px] text-[#36485C] lg:text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga natus beatae labore. Placeat iste repudiandae eius ab earum explicabo facilis optio.</p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span><Image src={Check} alt="check" /></span> Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span><Image src={Check} alt="check" /></span> Lorem ipsum dolor sit.
            </li>
            <li className="flex items-center gap-x-4 text-[#36485C]">
              <span><Image src={Check} alt="check" /></span> Lorem ipsum dolor sit amet.
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] lg:text-[18px] font-medium text-[#00a424]">
            Learn More <span><Image src={GreenButton} alt="green button" /></span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 lg:flex-row-reverse">
        <Image src={Feature3} alt="feature 3" className="hidden lg:block w-1/2" />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">Growth Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Monitor your site's new subscribers</h1>

          <Image src={Feature3} alt="feature 3" className="pt-[24px] sm:hidden" />
          <p className="pt-[24px] pb-[24px] text-[#36485C] lg:text-[18px]">Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.</p>

          <div className='flex w-full gap-x-[24px] pt-[24px]'>
            <div className='w-1/2 flex-col gap-y-3'>
              <h3 className='text-[#172026] text-[20px] font-medium'>100+</h3>
              <p className='text-[#36485C]'>Lorem, ipsum.</p>
            </div>
            <div className='w-1/2 flex-col gap-y-3'>
              <h3 className='text-[#172026] text-[20px] font-medium'>800+</h3>
              <p className='text-[#36485C] '>Lorem, ipsum Lorem, ipsum dolor..</p>
            </div>
            
          </div>

          <p className="flex items-center gap-x-2 pt-[24px] lg:text-[18px] font-medium text-[#EB2891]">
            Learn More <span><Image src={PinkButton} alt="pink button" /></span>
          </p>
        </div>
      </div>
    </div>
  );
}
