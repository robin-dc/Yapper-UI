import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { UserCard } from ".."

const FriendsList = () => {
  return (
    <Card className="bg-primary border-none flex gap-[1rem] p-[1rem]">
    <div className="w-full">
        <CardHeader className="p-0 mb-[1rem]">
            <CardTitle className="text-[1.2rem] text-white ">Moots</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </CardContent>
    </div>
</Card>
  )
}

export default FriendsList
