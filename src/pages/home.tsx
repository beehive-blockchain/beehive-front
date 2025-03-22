import { Button } from "@/components/ui/button";

import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="font-display" >
      <div>
        <h1 className="heading-1">
          The future of Crypto investment
        </h1>
        <p>BeeHive leverages advanced algorithms and market intelligence to deliver exceptional returns in any market condition.</p>
        <Button>Start Investing</Button>
        <Button variant="ghost" >Learn more
          <MoveRight />
        </Button>
      </div>

      <div className="bg-gray-900">
        <h1 className="heading-1" >A New Era of Investment Management</h1>
      </div>
    </div>
  )
}
