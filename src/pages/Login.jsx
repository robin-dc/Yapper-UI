//  Shadcn Imports
import { Button } from "../components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"

// React Router Imports
import { Link } from "react-router-dom"

// React Icons
import { GrNext } from "react-icons/gr";

const formSchema = z.object({
  username: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 8 characters.",
  }),
})

const Login = () => {

    const form = useForm({resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password: "",
      },
    })
    const {
        handleSubmit,
        control
    } = form

    function onSubmit(values) {

      console.log(values)
    }

    return (
      <div
        className="px-[1rem] bg-right-bottom lg:px-0 min-h-screen bg-no-repeat bg-cover lg:bg-center w-full flex justify-center items-center"
        style={{backgroundImage: "url('/auth_bg.png')"}}>
          <div className="w-[520px] mx-auto bg-primary border border-customBorder rounded-xl text-white py-[2rem] px-[2rem] lg:px-[4rem] flex flex-col justify-center">
          <h1 className="text-[2rem] mb-[1.8rem] text-lightGray">Log in to <span className="gradient font-semibold">Yapper</span></h1>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Username, phone, email" {...field}
                        className="bg-customGray border-none rounded-lg placeholder:text-lightGray p-[1.6rem]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password" {...field}
                        className="bg-customGray border-none rounded-lg placeholder:text-lightGray p-[1.6rem]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-secondary text-[1rem] font-bold p-[1.6rem] rounded-lg hover:bg-lightGray text-primary w-full">
                  Log in
              </Button>
            </form>
          </Form>
          <h4 className=" text-center my-[1rem] text-[0.96rem]">
            Don&apos;t have an account?&nbsp;
            <span className="text-white hover:underline">
              <Link to="/register">Sign up</Link>
            </span>
          </h4>

          <p className="text-center text-[0.95rem] text-lightGray relative
          before:content-[''] before:h-[1.7px] before:w-[43%] before:bg-customBorder before:absolute before:left-0 before:top-[50%]
          after:content-[''] after:h-[1.7px] after:w-[43%] after:bg-customBorder after:absolute after:right-0 after:top-[50%]">or</p>

              <Link to="/" className="border border-customBorder rounded-lg p-[1.5rem] mt-[0.6rem] flex justify-between items-center gap-[1rem] hover:cursor-pointer">
                <img src="/google_logo.png" className="w-[2.7rem]" alt="" />
                <h3 className="text-white font-normal text-[0.97rem]">Continue with Google <span className="hidden md:inline text-white">Account</span></h3>
                <GrNext className="text-[1rem]"/>
              </Link>

          </div>
      </div>
    )
}

export default Login
