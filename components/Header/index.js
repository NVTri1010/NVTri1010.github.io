import React from 'react'
import Link from 'next/link'

import { RotateItem } from 'components'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <Link passHref href='/'>
        <a className={styles.name}>
          <RotateItem>NVT</RotateItem>
        </a>
      </Link>

      <div className={styles.socialsList}></div>
    </div>
  )
}

export default Header
