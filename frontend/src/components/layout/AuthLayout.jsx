import React from 'react'
import CardImage from "../../assets/images/card1.jpg"

const AuthLayout = ({ children }) => {
  return (
    <>
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
            <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
            {children}
        </div>
    

    <div className='hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-no-repeat bg-center overflow-hidden p-8 relative'>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>

        <img src={CardImage} className=''/>
    </div>
    </div>
    </>
  )
}

export default AuthLayout;