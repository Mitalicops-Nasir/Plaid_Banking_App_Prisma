import React from 'react'

const Authlayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-yellow-500 to-blue-500'>
     {children}  
    </div>
   
  )
}

export default Authlayout