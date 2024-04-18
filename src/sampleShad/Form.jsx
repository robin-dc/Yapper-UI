import { Button } from "../components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const Login = () => {

    const form = useForm({resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setError,
        control
    } = form

    function onSubmit(values) {

      console.log(values)
    }

    return (
      <div
        className="min-h-screen bg-no-repeat bg-cover w-full"
        style={{backgroundImage: "url('/auth_bg.png')"}}>
          <div className="w-[800px] mx-auto ">
          {/* className="bg-primary border border-customBorder rounded-md text-white" */}
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          </div>
      </div>
    )
}

export default Login
