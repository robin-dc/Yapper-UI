import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Advertisement = () => {
  return (
    <Card className="bg-primary border-customGray flex gap-[1rem] p-[1rem]">
        <div>
            <CardHeader className="p-0">
              <CardTitle className="text-[1.2rem] gradient">AI-powered social media platform for FREE</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
            <ul>
              <li>
                <small>&#8226; Write grammar-free post with Open AI</small>
              </li>
              <li>
                <small>&#8226; Generate images with Imagine AI</small>
              </li>
            </ul>
            </CardContent>
        </div>
    </Card>
  )
}

export default Advertisement
