import Footer1 from '@/components/Footer1'
import Nav from '@/components/Nav'
import React from 'react'
import Link from 'next/link'

const Template = ({ children }) => {
  return (
    <>
      <Nav />
      <Link href={'/contact-form'} className="fixed z-50 -rotate-90 bottom-60 py-2 px-4 text-white font-semibold rounded-sm -mr-6 bg-primary hover:bg-success-600 right-0">Reach us</Link>
      {children}
      <Footer1 />
    </>
  )
}

export default Template