import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

import styles from './Home.module.css'
import PrevIcon from 'svg/ic_prev.svg'
import NextIcon from 'svg/ic_next.svg'

const roles = ['Web Developer', 'Cross-Platform Developer']
const name = 'Nguyen Viet Tri'

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Portfolio</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.name}>{name}</div>

          <div className={styles.imgWrapper}>
            <div className={styles.rolesWrapper}>
              <ul className={styles.roles}>
                {roles.map(role => (
                  <li key={role} className={styles.role}>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <img
              height='100%'
              alt='portfolio'
              src='/assets/images/portfolio.jpg'
            />
          </div>

          <div className={styles.btnWrapper}>
            <Link passHref href='/cv'>
              <a className={classnames(['text-navigation', styles.moveLeft])}>
                <PrevIcon height='22' />
                My CV
              </a>
            </Link>
            <Link passHref href='/blogs'>
              <a className={classnames(['text-navigation', styles.moveRight])}>
                My Blogs
                <NextIcon height='20' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
