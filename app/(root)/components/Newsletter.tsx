"use client"
import { useForm, SubmitHandler } from "react-hook-form"

// Components
import InputField from "@/app/components/InputField"

type EmailInput = {
  email: string
}

const Newsletter = () => {

  const { register, handleSubmit } = useForm<EmailInput>();
  const onSubmit: SubmitHandler<EmailInput> = (data) => console.log(data)

  return (
    <form className="flex gap-4 flex-col md:flex-row" onSubmit={handleSubmit(onSubmit)} >
      <InputField className="basis-3/4" type="email" placeholder="輸入你的 email ..."/>
      <input type="submit" value="免費訂閱" className="p-2 text-sm basis-1/4 bg-secondary text-white rounded-md cursor-pointer hover:bg-[#2577a3] duration-200" />
    </form >
  )
}

export default Newsletter