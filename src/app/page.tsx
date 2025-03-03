import Button from "@/components/common/Button";
import writerSvg from "../../public/images/writer_svg.svg";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full titillium-web-regular overflow-auto">
      <section className="w-screen h-screen bg-slate-100 px-[150px] flex flex-col gap-8 justify-center items-center">
        <div className="flex w-full gap-2">
          <div className="flex flex-col gap-8 w-1/2">
            <p className="text-[10px] text-gray-300 tracking-widest">
              FREE 30 DAYS TRIAL
            </p>
            <div className="flex flex-col">
              <p className="text-[60px] leading-[70px] font-semibold text-wrap text-gray-200 tracking-widest text-left">
                Write.
              </p>
              <p className="text-[60px] leading-[70px] font-semibold text-wrap text-gray-200 tracking-widest text-left">
                Publish.
              </p>
              <p className="text-[60px] leading-[70px] font-semibold text-wrap text-gray-200 tracking-widest text-left">
                Earn.
              </p>
            </div>
            <p className="text-[14px] font-medium w-2/3 text-gray-200 tracking-widest">
              {`Welcome to Kraft – a creative space for writers to publish novels, stories, and poems, set their own prices, and connect with readers worldwide.`}
            </p>
            <div className="flex gap-4 items-center">
              <Button type="primary" label="Start Writing" />
              <Button type="primary" label="Explore Stories" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 w-1/2">
            <img src={writerSvg.src} width="300px" />
          </div>
        </div>
        <p className="text-[14px] w-1/3 text-center font-medium text-gray-200 tracking-widest">
          {`A creative workspace with a laptop, books, and a cup of coffee.`}
        </p>
      </section>
      <section className="w-screen h-screen bg-slate-100 px-[100px]">
        <div className="flex w-full h-full items-center justify-center">
          <div className="grid w-full grid-cols-3 gap-4">
            <div className="h-[300px] flex flex-col justify-center items-center border group border-gray-100 transition-all duration-300 hover:bg-[#efd5d078] cursor-pointer shadow-md rounded-lg">
              <p className="text-[30px] leading-[70px] font-semibold text-wrap transition-all duration-300 group-hover:text-pink-300 text-gray-200 tracking-widest text-left">
                Write & Publish
              </p>
              <p className="text-[14px] w-2/3 text-center font-medium text-gray-200 tracking-widest">
                {`Upload your stories, novels, or poems and decide how much to offer as a preview.`}
              </p>
            </div>
            <div className="h-[300px] flex flex-col justify-center items-center border group border-gray-100 transition-all duration-300 hover:bg-[#efd5d078] cursor-pointer shadow-md rounded-lg">
              <p className="text-[30px] leading-[70px] font-semibold text-wrap transition-all duration-300 group-hover:text-pink-300 text-gray-200 tracking-widest text-left">
                Set Your Price
              </p>
              <p className="text-[14px] w-2/3 text-center font-medium text-gray-200 tracking-widest">
                {`You control the pricing for your work, with full flexibility.`}
              </p>
            </div>
            <div className="h-[300px] flex flex-col justify-center items-center border group border-gray-100 transition-all duration-300 hover:bg-[#efd5d078] cursor-pointer shadow-md rounded-lg">
              <p className="text-[30px] leading-[70px] font-semibold text-wrap transition-all duration-300 group-hover:text-pink-300 text-gray-200 tracking-widest text-left">
                Connect with Readers
              </p>
              <p className="text-[14px] w-2/3 text-center font-medium text-gray-200 tracking-widest">
                {`Sell your stories, get feedback, and build your fanbase.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
