import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleToSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
      </div>
      <form className="bg-black absolute p-10 w-3/12 my-44 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-slate-50 font-bold text-3xl mx-12 my-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 mx-12 my-4 w-80 rounded-md" />}
        <input type="text" placeholder="Email Address" className="p-2 mx-12 my-4 w-80 rounded-md" />
        <input type="text" placeholder="Password" className="p-2 mx-12 my-4 w-80 rounded-md" />
        <div>
          {" "}
          <button className="bg-red-500 p-2 mx-12 my-4 w-80 rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        </div>
        <p className="p-2 mx-12 my-4 text-slate-50 text-lg">
          {isSignInForm ? "New to Netflix ?" : "Already a User?"}{" "}
          <u className="cursor-pointer" onClick={toggleToSignUp}>
            {isSignInForm ? "Sign up now" : "Sign In Now"}
          </u>
        </p>
      </form>
    </div>
  );
};

export default Login;
