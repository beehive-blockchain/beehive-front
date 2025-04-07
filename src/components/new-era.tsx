import shield from "@/assets/icons/shield.svg";
import ones from "@/assets/icons/ones.svg";
import globe from "@/assets/icons/globe.svg";


export default function NewEra() {
  return (
    <>
      <section className="bg-white font-display dark:bg-bleuFonce p-8">
        <h2 className="heading-2">A New Era of Investment Management</h2>
        <div className="flex flex-col md:flex-row justify-start items-center mt-8 gap-8">
          <img src={shield} alt="Shield Icon" className="w-16 h-16 mt-4" />
          <div>
            <h2 className="heading-3 mt-4">Risk Management</h2>
            <p className="paragraph mt-2">
              Advandced risk modeling and portfolio optimization to protect and grow your investment
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center mt-8 gap-8">
          <img src={globe} alt="Globe Icon" className="w-16 h-16 mt-4" />
          <div>
            <h2 className="heading-3 mt-4">Global Exposure</h2>
            <p className="paragraph mt-2">
              Diversified investment across multiple ecosystems and assets
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center mt-8 gap-8">
          <img src={ones} alt="Ones Icon" className="w-16 h-16 mt-4" />
          <div>
            <h2 className="heading-3 mt-4">Smart Allocation</h2>
            <p className="paragraph mt-2">
              Dynamic asset allocation driven by market condition and opportunities
            </p>
          </div>
        </div>
      </section>
    </>
  );
};