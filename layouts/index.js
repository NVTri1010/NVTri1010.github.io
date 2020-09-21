import React from 'react'

import styles from './styles.module.css'

export default function BlogLayout({ children, frontMatter }) {
  const { readingTime } = frontMatter

  return (
    <>
      <div className={styles.readingTime}>{readingTime.text}</div>
      {children}
    </>
  )
}
