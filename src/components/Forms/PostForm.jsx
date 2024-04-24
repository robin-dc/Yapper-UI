import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react"

import { TiUpload } from "react-icons/ti";

const PostForm = () => {
  const [postImages, setPostImages] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    setPostImages([])
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        setPostImages(state => [...state, file.name])
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const submit = () => {
    setPostImages([])
  }
  return (
    <Dialog>
        <div className="flex gap-[1rem] justify-between py-[2rem] items-center">
            <Avatar >
                <AvatarImage src="https://robin-dc.github.io/Facebook-UI-Clone/images/robin.png" />
                <AvatarFallback>YP</AvatarFallback>
            </Avatar>
            <DialogTrigger asChild>
                <Input type="yap" id="yap" placeholder="Start Yapping..." className="bg-transparent border-t-0 border-l-0 border-r-0 rounded-none placeholder:text-lightGray outline-none p-0 border-b-[1px] border-customGray" value=""/>
            </DialogTrigger>
            <Button type="submit" className="bg-white rounded-bl-none text-primary hover:bg-customGray hover:text-white">Post Yap</Button>
        </div>
      <DialogContent className="bg-primary border-customGray">
        <DialogHeader>
          <DialogTitle className="gradient text-[1.5rem]">Create Yap</DialogTitle>
          <DialogDescription className="text-white">
            Please be mindful of your words.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
            <Textarea placeholder="Type your message here." id="message-2" className="border-customGray bg-primary placeholder:text-lightGray outline-none focus-visible:ring-offset-0 max-h-[50vh] focus-visible:ring-0"/>
            <p className="text-sm text-lightGray">
                Your message will be protected by yapping team.
            </p>
        </div>
        <div>

        <div {...getRootProps()} className="flex justify-center items-center p-[3rem] border border-dashed border-customGray">
          <input {...getInputProps()} />
          <div className="flex flex-col items-center">
            {postImages.length == 0 ? (
              <>
                <TiUpload className="text-[3rem]"/>
                <p>Add some files here</p>
              </>
            ) : postImages.map((img, index) => <p className="text-[0.9rem] inline" key={index}>{img}</p>)}
          </div>

        </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-white text-primary opacity-100 hover:bg-customGray hover:text-white" onClick={submit}>Okayed</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PostForm
