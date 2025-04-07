import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className=" flex flex-col justify-center items-center font-display bg-blancBleu dark:bg-black p-8">
        {/* TODO : Add animations and other background for black and white mode */}

        <h1 className="heading-1 text-center whitespace-pre">
          The Future of
          <span className="block text-bleu dark:text-white whitespace-pre"> Crypto investment</span>
        </h1>
        <p className="paragraph mt-4 text-center">
          BeeHive leverages advanced algorithms and market intelligence to
          deliver exceptional returns in any market condition.
        </p>
        <div className="mt-6 flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Button variant="bleu" className="rounded-full text-white">Start Investing</Button>
          <Button variant="ghost">
            Learn more
            <MoveRight />
          </Button>
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <div className="flex flex-col items-center">
            <h4 className="font-bold">Start Investing</h4>
            <p>
              Assets Under Management
            </p></div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold ">Start Investing</h4>
            <p>
              Average Annual Return
            </p></div>
        </div>
      </section>
    </>
  );
}