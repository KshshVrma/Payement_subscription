import React,{useState,useEffect} from 'react'
import basic from "../assets/basic.svg"
import pro from "../assets/pro.svg"
import bussiness from "../assets/bussiness.svg"
import firebase from '../firebase/firebaseConfig';
const data=[{
  id:1,
  src:basic,
  title:"basic",
  price:"99",
},
{
  id:2,
  src:pro,
  title:"pro",
  price:"499",
},
{
  id:3,
  src:bussiness,
  title:"bussiness",
  price:"999",
}]
function Home() {
  const [userId,setUserId]=useState("");
  const [userName,setUsername]=useState("");
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        setUserId(user.uid);
        setUsername(user.displayName);
      }
      else
      {
        setUserId("");
        setUsername("");
      }
    })
  },[userId])
  const checkout=(plan)=>{
    fetch("http://localhost:5000/api/v1/create-subscription-checkout-session",{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      mode:"cors",
      body:JSON.stringify({plan:plan,customerId:userId})
    }).then((res)=>{
      if(res.ok) return res.json();
      console.log(res);
      return res.json().then((json)=>Promise.reject(json));
    })
    .then((session)=>{
      window.location=session.url;
    }).catch((e)=>{
      console.log(e.error);
    })
  }
  return (
    <div className='flex flex-col items-center w-full mx-auto in-h-screen diagonal-bckground overflow-x-hidden'>
        <div className='flex justify-beetween items-center w-full px-6 h-20 bg-[#00000012]'>
            <div className='text-4xl font-bold text-white'>services</div>
            <div className='flex justify-enter items-center'>
              {!userId ? (
                <a href="/login"
                className='bg-black px-4 py-2 uppercase w-auto rounded-lg text-xl text-[#4f7cff] font-semibold'>Login</a>) :
                <div className='flex justify-center items-center space-x-4'><span className='text-white text-xl'>{userName}</span>
                <button onClick={()=> firebase.auth().signOut()} className='bg-black px-4 py-2 rounded-lg text-base uppercase font-semibold text-[#4f7cff]'>Logout</button>
                </div>}
            </div>
        </div>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 z-50 place-items-center w-9/12 mx-auto mt-20'>
          {data.map((item,idx)=>(
            <div key={idx} className='bg-white px-6 py-8 rounded-xl text-[#4f7cff] w-full mx-auto grid place-items-center'
            >
              <img
              src={item.src}
              alt=""
              width={200}
              height={200}
              className='h-40'
              />
              <div className='text-4xl text-slate-700 text-centerpy-4 font-bold'>{item.title}</div>
              <p className='lg:text-sm text-slate-500 text-center px-6 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci tempore ea, quos consectetur ullam odit! Nobis amet quas maxime facilis, fugit impedit est mollitia magnam dolor non nisi, corrupti quia deserunt vero enim!</p>
              <div className='text-4xl text-center font-fold py-4'>
              ₹{item.price}
                </div>
                <div className='mx-auto flex justify-center items-center my-3'>
                  <button onClick={()=> checkout(Number(item.price))} className='bg-[#3d5fc4] text-whie rounded-md text-base 
                  uppercase w-24 py-2 font-bold'>
                    Start
                  </button>
              </div>
              </div>
          ))}

        </div>
    </div>
  )
}

export default Home;