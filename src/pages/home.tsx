import Description from "@/components/ui/description";
import Footer from "@/components/ui/footer";
import { MyPieChartVault } from "@/components/ui/pie-chart-vault";
import Tokenomics from "@/components/ui/tokenomics";
import { Header } from "@radix-ui/react-accordion";

export default function Home() {
  return (
    <>
      <Header />
      <Description />
      <MyPieChartVault />
      <Tokenomics />
      <Footer />
    </>
  )
}
