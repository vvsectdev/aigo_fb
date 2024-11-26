import Image from "next/image";
import MainImage from '../../../public/images/main.webp';
import Link from "next/link";
import {shop} from "@/shared/consts/shop";

export default function Page() {
  return (
    <div className="font-bai-jamjuree text-[#fff] h-full">
      <div className="max-w-[360px] bg-[#121423] w-full mx-auto sm:max-w-[100vw]">
        <div className="sticky z-[10] p-[15px] w-full left-0 top-0 backdrop-blur-[5px] flex items-center justify-between pb-[15px] gap-[30px] sm:p-[4.167vw] sm:gap-[8.333vw] sm:pb-[4.167vw]">
          <div className="flex items-center gap-[8px] sm:gap-[2.222vw] ">
            <div className="relative shadow-custom-purple overflow-hidden w-[32px] h-[32px] rounded-[8px] sm:w-[8.889vw] sm:h-[8.889vw] sm:rounded-[2.222vw]">
              <Image
                fill
                src={MainImage.src}
                className="object-cover"
                alt="image"
              />
            </div>
            <p className="font-medium text-[12px] sm:text-[3.333vw]">
              Get the AiGo and snag your girl today!
            </p>
          </div>
          <Link className="bg-button-gradient shadow-custom-purple font-bold text-[12px] text-[#fff] px-[12px] py-[4px] rounded-[12px] sm:text-[3.333vw] sm:px-[3.333vw] sm:py-[1.2vw] sm:rounded-[3.333vw]" href="@/app/(public)/page#">Get</Link>
        </div>
        <div className="gap-x-[12px] p-[15px] flex flex-wrap gap-y-[8px] sm:gap-y-[2.222vw] sm:gap-x-[3.333vw]">
          {shop.map(item => {
            return <div className="relative w-[48.1%] h-[206px] flex flex-col shadow-custom-purple inner-shadow justify-end shadow-inner-image rounded-[16px] p-[12px] sm:rounded-[4.444vw] sm:p-[3.333vw] sm:w-[43.689vw] sm:h-[57.222vw]" key={item.id}>
              <Image
                fill
                src={item.image.src}
                className="object-cover rounded-[16px] sm:rounded-[4.444vw]"
                alt={item.name}
              />
              <div className="relative z-[5]">
                <p className="text-[16px] tracking-[0.02em] font-bold sm:text-[4.444vw] leading-[1.2em]">{item.name}</p>
                <p className="font-medium text-[12px] sm:text-[3.333vw]">{item.description}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}