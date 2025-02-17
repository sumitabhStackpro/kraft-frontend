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
              {`A platform for writers to share their stories, poems, and books –
            and sell them at their own price.`}
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
      <section className="w-screen h-screen bg-slate-100"></section>
    </div>
  );
}
