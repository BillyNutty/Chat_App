import { useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Input/Button"

const Form = ({
    isSignInPage = true,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })

    return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
      <div className="text-xl font-light mb-14">{isSignInPage ? 'Sign in to explore' : 'Sign up to get started'}</div>
      <form className="flex flex-col items-center w-full" >
      { !isSignInPage && <Input label="Full Name" name="name" placeholder="Enter Your Full Name" className="mb-6" value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })}/> }
      <Input label="E-mail Address" type="email" name="email" placeholder="Enter Your E-Mail" className="mb-6" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}/>
      <Input label="Password" name="password" placeholder="Enter Your Password" className="mb-14" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
      <Button label={isSignInPage ? "Sign In" : "Sign Up"} type="submit" className="w-1/2 mb-2" />
      </form>
      <div>{isSignInPage ? "Don't have an account" : "Already have an account"} <span className="text-primary cursor-pointer underline">{isSignInPage ? "Sign Up" : "Sign In"}</span></div>
    </div>
  )
}

export default Form