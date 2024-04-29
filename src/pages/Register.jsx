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
import { Link, useNavigate } from "react-router-dom"

import Api from "@/common/api"


const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  userName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmpass: z.string()
}).refine((data) => data.password === data.confirmpass, {
  message: "Passwords don't match",
  path: ["confirmpass"], // path of error
});

const Register = () => {
    const navigate = useNavigate()
    const form = useForm({resolver: zodResolver(formSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmpass: "",
      },
    })
    const {
        handleSubmit,
        control
    } = form

    const onSubmit = async(values) =>  {
      const response = await Api.register(values)
      console.log(response)
      if(response){
        form.reset()
        navigate('/login')
      }
    }

    return (
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center w-full h-full flex justify-center items-center"
        style={{backgroundImage: "url('/auth_bg.png')"}}>
          <div className="w-[520px] mx-auto bg-primary border border-customBorder rounded-xl text-white py-[2rem] px-[4rem] flex flex-col justify-center">
          <h1 className="text-[2rem] mb-[1.8rem] text-lightGray">Join <span className="gradient font-semibold">Yapper</span> Today</h1>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className="flex space-x-2">
                <FormField
                  control={control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Firstname" {...field}
                          className="bg-customGray focus:border-transparent focus:outline-none border-none rounded-lg placeholder:text-lightGray p-[1.6rem]" style={{outline:"none", borderColor: "transparent"}}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Lastname" {...field}
                          className="bg-customGray focus:border-transparent focus:outline-none border-none rounded-lg placeholder:text-lightGray p-[1.6rem]" style={{outline:"none", borderColor: "transparent"}}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Username" {...field}
                        className="bg-customGray border-none rounded-lg placeholder:text-lightGray p-[1.6rem]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email" {...field}
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
              <FormField
                control={control}
                name="confirmpass"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password" {...field}
                        className="bg-customGray border-none rounded-lg placeholder:text-lightGray p-[1.6rem]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-secondary text-[1rem] font-bold p-[1.6rem] rounded-lg hover:bg-lightGray text-primary w-full">
                  Sign up
              </Button>
            </form>
          </Form>
          <h4 className=" text-center my-[1rem] text-[0.96rem]">
            Already have an account?&nbsp;
            <span className="text-white hover:underline">
              <Link to="/login">Sign in</Link>
            </span>
          </h4>


          </div>
      </div>
    )
}

export default Register
