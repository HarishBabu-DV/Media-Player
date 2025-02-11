import React from 'react'

const Container = ({children}) => {
  return (
    <main className='max-w-screen-2xl w-full mx-auto'>
      {children}
    </main>
  )
}

export default Container