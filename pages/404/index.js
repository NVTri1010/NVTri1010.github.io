import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

import { RotateItem } from 'components'

import styles from './404.module.css'

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h3>Oops</h3>
      <div className={styles.text}>Page doesn't exist</div>
      <Link passHref href='/'>
        <a className={classnames([styles.back, 'text-navigation'])}>
          <RotateItem>Back to Home</RotateItem>
        </a>
      </Link>
    </div>
  )
}

export default ErrorPage
