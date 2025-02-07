import React from 'react'
import './App.css'
import Header from './components/ui/header'
import { MyPieChart } from './components/ui/pie-chart'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from './components/ui/footer'
import Tokenomics from './components/ui/tokenomics'
import Description from './components/ui/description'



function App() {

  return (
    <>
      <Header />
      <Description />
      <MyPieChart />
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-0">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Tokenomics />
      <Footer />
    </>
  )
}

export default App
