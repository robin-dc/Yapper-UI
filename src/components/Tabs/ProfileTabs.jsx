import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PostCard } from "@/components"

const ProfileTabs = () => {
  return (
    <Tabs defaultValue="yaps" className="w-full">
      <TabsList className="w-full flex bg-primary p-0 rounded-none">
        <TabsTrigger value="yaps" className="w-full gradient rounded-none">Yaps</TabsTrigger>
        <TabsTrigger value="repost" className="w-full gradient rounded-none">Reposts</TabsTrigger>
      </TabsList>
      <TabsContent value="yaps" className="m-0">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </TabsContent>
      <TabsContent value="repost" className="m-0">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </TabsContent>
    </Tabs>
  )
}
export default ProfileTabs
