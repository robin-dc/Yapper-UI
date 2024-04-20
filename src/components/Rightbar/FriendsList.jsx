import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PersonCard } from ".."

const FriendsList = () => {
  return (
    <Card className="bg-primary border-customGray flex gap-[1rem] p-[1rem]">
    <div className="w-full">
        <CardHeader className="p-0 mb-[1rem]">
            <CardTitle className="text-[1.2rem] text-white ">Peers</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
            <PersonCard/>
        </CardContent>
    </div>
</Card>
  )
}

export default FriendsList
