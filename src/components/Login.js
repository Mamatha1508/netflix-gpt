import {  useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { LOGIN_SCREEN } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email=useRef(null);
  const password=useRef(null);
  const fullName= useRef(null);
  const [errMessage,setErrMessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const toggleToSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validateCredentials=()=>{
    const msg=checkValidData(email.current.value,password.current.value);
    setErrMessage(msg);
    if(msg)
    return;
    if(!isSignInForm)
    {
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    console.log('user credentisl sign up',userCredential);
    const user = userCredential.user;
   console.log(user);
   setIsSignInForm(!isSignInForm);
   dispatch(addUser({uid : user.uid,email : user.email, displayName : fullName.current.value , photoURL : "https://media.licdn.com/dms/image/C5603AQH26aIZC6XNkg/profile-displayphoto-shrink_200_200/0/1649421175223?e=1717632000&v=beta&t=dDjxr34bJmYOlzULYdzV_jMphdrfbWBOYe1P7fK38UY"}))
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(`${errorCode} - ${errorMessage}`);
  
  });
    }

    else
    {
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    console.log('user credentisl sign in',userCredential);
    const user = userCredential.user;
    console.log(user);
  //  dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    //navigate('/browse')
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(`${errorCode} - ${errorMessage} failed`);
  });
    }
  }

  return (
    <div>

      <div className="absolute">
        <img src={LOGIN_SCREEN} alt="logo" />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="bg-black absolute p-10 w-3/12 my-44 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-slate-50 font-bold text-3xl mx-12 my-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={fullName} type="text" placeholder="Full Name" className="p-2 mx-12 my-4 w-80 rounded-md" />}
        <input type="text" placeholder="Email Address" className="p-2 mx-12 my-4 w-80 rounded-md" ref={email}/>
        <input type="text" placeholder="Password" className="p-2 mx-12 my-4 w-80 rounded-md" ref={password} />
        <p className="text-red-700 text-lg mx-12 ">{errMessage}</p>
        <div>
         
          <button className="bg-red-500 p-2 mx-12 my-4 w-80 rounded-md" onClick={validateCredentials}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
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
