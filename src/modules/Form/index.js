import Input from "../../components/Input"
import Button from "../../components/Input/Button"

const Form = () => {
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">Welcome</div>
      <div className="text-xl font-light mb-14">Sign up now to get started</div>
      <Input label="Full Name" name="name" placeholder="Enter Your Full Name" className="mb-6"/>
      <Input label="E-mail" name="email" placeholder="Enter Your E-Mail" className="mb-6"/>
      <Input label="Password" name="password" placeholder="Enter Your Password" className="mb-6"/>
      <Button label="Sign Up"/>
    </div>
  )
}

export default Form