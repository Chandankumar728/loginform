import React from 'react'

function LoginForm() {
  return (

    <div className='bg-blue-500 h-screen '>
      <div className='text-4xl text-center py-48 text-yellow-400  justify-center font-extrabold underline '>
        Login Form
      </div>
      <form action="" className='px-60 ml-96 justify-center relative bottom-28' >
        <div className='flex'>
          
        <input type="text"  placeholder= ' username' className='border-2 border-black rounded-2xl  px-16 h-9 ' />
        </div>
        <br />
        <input type="password" placeholder='Password' className='border-2 border-black rounded-2xl  mt-3 px-16 h-9 ' />
        <div className='text-red-800'>
          forgot password ?
        </div>
        <div>
          <button type="submit" className=' mt-8 ml-2 bg-blue-300 border-2 border-black rounded-2xl  px-32 h-9'>Login</button>
        </div>
      </form>
    </div>

  )
}

export default LoginForm