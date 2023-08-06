import React ,{useState}from 'react';
import firebase from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
// import {useState}

function Login() {
// const [fullname,setFullname]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


const navigate=useNavigate();

const  handleSubmit=async (e)=>{
    e.preventDefault();

    try{
        if(!email||!password){
            console.log(fullname);
            console.log(email);
            console.log(password);
        }
    
        const response=await firebase.auth().signInWithEmailAndPassword(email,password);
    
        if(response.user){
            // setFullname("");
            setEmail("");
            setPassword("");
            await navigate("/home");
    
        }
    }catch(error){
console.log("login error");
    }
   
    }

    // const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if(!emailRegex.test(email)){
    //     console.log("please provide a valid email");
    //     return ;
    // }
  


  return (
    <div className='flex items-center w-full mx-auto h-screen diagonal-background'>
        <form onSubmit={handleSubmit}
        className='grid place-items=center lg:w-5/12 w-11/12 mx-auto bg-white text-[#4f7cff] shadow-2xl rounded-3xl'>
            <div className='pt-16 pb-4 text-3xl font-bold capitalize'>
                Login to services
            </div>
           {/* fullname */}
         

        {/* email */}


        <div className='w-full flex flex-col px-14 py-8'><label>email</label>
            <input type="email" className='w-full border border-gray-300 rounded-lg px-3 py-3 mt-1 text-lg outline-none' placeholder='example@123@gmail.com' required value={email} onChange={(e)=>{setEmail(e.target.value)}}></input></div>

            {/* {password} */}

            <div className='w-full flex flex-col px-14 py-8'><label>password</label>
            <input type="password" className='w-full border border-gray-300 rounded-lg px-3 py-3 mt-1 text-lg outline-none' placeholder='********' required value={password} onChange={(e)=>{setPassword(e.target.value)}}></input></div>


            <div className='w-full flex justify-between items-center px-14 pb-8 text-[#3d5fc4]'>

                <div>Don't have an account?</div>
                <a href="/register" className='hover:underline'>Register Now</a>

</div>

<div className='mx-auto flex justify-center items-center pt-6 pb-16'>

    <button type="submit" className='bg-[#3d5fc4] text-white rounded-md text-base uppercase w-24 py-2'>Login</button>
</div>
        </form>
    </div>
  )
}

export default Login;