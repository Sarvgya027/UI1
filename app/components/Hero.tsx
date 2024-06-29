import BlueArrow from '@/public/assets/blue-button.svg'
import Gradient from '@/public/assets/Gradient.svg'
import HeroImage from '@/public/assets/Image.svg'
import Google from '@/public/assets/Google.svg'
import Slack from '@/public/assets/Slack.svg'
import TrustPilot from '@/public/assets/Trustpilot.svg'
import Cnn from '@/public/assets/CNN.svg'
import Clutch from '@/public/assets/Clutch.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px] ">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">Start Monitoring like a Pro</h1>
        <p className="text-center pt-6 lg:text-[18px] lg:leading-7 text-[#36485C] ">
          Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
        </p>


        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328Eb] w-1/2 text-white py-4 px-8 rounded-[4px] lg:w-fit ">Try for free</button>
          <button className="w-1/2 flex items-center justify-center gap-x-2 text-[#4328Eb] lg:w-fit ">View Pricing <span><Image src={BlueArrow} alt="blue arrow" /> </span></button>
        </div>
      </div>

      <div className='relative flex h-full w-full justify-center'>
        <Image src={Gradient} alt="gradient" className='min-h-[500px] w-full object-cover lg:h-auto  ' />

        <div className='absolute bottom-5 flex w-full flex-col items-center'>
          <Image src={HeroImage} alt="hero image" className='-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]' />

          <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
            <p className='text-white text-center lg:text-[18px]'>Trusted by these companies</p>

            <div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5'>
              <Image src={Google} alt="google" />
              <Image src={Slack} alt="slack" />
              <Image src={TrustPilot} alt="trustpilot" />
              <Image src={Cnn} alt="cnn" />
              <Image src={Clutch} alt="clutch" />

            </div>
          </div>
        </div>
      </div>

    </div>
  )
} 