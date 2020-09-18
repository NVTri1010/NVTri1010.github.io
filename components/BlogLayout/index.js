import React from 'react'
import { Header } from 'components'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BlogLayout
