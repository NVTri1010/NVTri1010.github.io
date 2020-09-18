import React from 'react'

import styles from './RotateItem.module.css'

const RotateItem = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>{children}</div>
      <div className={styles.clone}>{children}</div>
    </div>
  )
}

export default RotateItem
