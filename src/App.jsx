import { FiEye } from "react-icons/fi";
import { FaRegEyeSlash } from "react-icons/fa";
import './App.css'
import { useState } from "react";

function App() {

  const [showPass, hidePass] = useState (false)

  const handelShowPass = ()=>{
    hidePass(!showPass)
  }

  return (
    <>

    <div className="log">
    <form className=' flex flex-col gap-[5px] '>
        <h1 className=" text-[25px] font-bold items-center">Log in to Facebook</h1>
        <input className='w-[300px] h-[50px] border-2 border-[#071952] rounded-lg' type="number" placeholder='Phone number' />
        <div className=" relative w-[300px] h-[50px]">
          {
            showPass?
            <FiEye onClick={handelShowPass} className=" absolute top-[50%] right-5 translate-y-[-50%]"/>
            :
            <FaRegEyeSlash onClick={handelShowPass} className=" absolute top-[50%] right-5 translate-y-[-50%]"/>
          }
          
          
        <input className='w-[300px] h-[50px] border-2 border-[#071952] rounded-lg' type={showPass? "text" : "password"}  placeholder='Password'/>
        </div>
        <button className=' w-[300px] h-[40px] bg-slate-500 text-xl text-white rounded-lg'>Log in</button>
       <h2>Forgotten account?</h2>
      </form>

    </div>
      
     

        





    </>
  )
}

export default App
