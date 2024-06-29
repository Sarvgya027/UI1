import Image from "next/image";
import Logo from '../../public/assets/Logo.svg'
import Facebook from '../../public/assets/Facebook.svg'
import Twitter from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'

export function Footer() {
  return (
    <div className="pt-[80px] pb-10 ">
      <div className="flex items-center justify-center gap-x-3">
        <Image src={Logo} alt="logo" />
        <p className="font-bold text-[#36485C] text-[17px] ">Jah Man Ofcourse</p>

      </div>

      <ul className="flex flex-col items-center gap-y-[32px] sm:flex-row sm:gap-x-5 sm:pt-5 sm:justify-center pt-[56px] text-[#36485c]">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprising</li>
        <li>Careers</li>
      </ul>


      <p className="pt-[56px] text-center sm:pt-5 text-[#36485C] font-medium ">© 2024. All rights reserved</p>

      <div className="flex items-center justify-center gap-x-14 pt-10">
        <Image src={Facebook} alt="facebook" />
        <Image src={Twitter} alt="twitter" />
        <Image src={Feed} alt="feed" />
      </div>
    </div>
  )
}