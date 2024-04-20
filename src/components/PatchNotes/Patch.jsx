import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { RxRocket } from "react-icons/rx";

const Patch = () => {
  return (
    <Card className="bg-primary border-customGray flex gap-[1rem] p-[1rem]">
        <RxRocket className="text-[1.5rem] text-white mt-1"/>
        <div>
            <CardHeader className="p-0">
            <CardTitle className="text-[1.2rem] text-white">Heads up!</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
            <p>This is the beta version of the app. Thank you for your support.</p>
            </CardContent>
        </div>
    </Card>
  )
}

export default Patch
