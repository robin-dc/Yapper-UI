
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const NotificationCard = () => {
  return (
    <Card className="bg-primary flex justify-between items-center border-none  py-[0.7rem]">
      <CardHeader className="p-0">
      <div className="flex gap-[1rem]">
        <div className="w-[0.6rem] h-[0.6rem] bg-blue-400 rounded-full mt-[0.5rem]"></div>
        <div>
          <CardTitle className="text-[0.8rem] text-white">Kang Haerin sent a moot request</CardTitle>
          <CardDescription>
            <small>1hr ago</small>
          </CardDescription>
        </div>
      </div>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  )
}

export default NotificationCard
