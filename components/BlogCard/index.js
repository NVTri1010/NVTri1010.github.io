import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

import { formatDate } from 'helpers/format'
import { ProgressiveImage } from 'components'
import styles from './BlogCard.module.css'

const BlogCard = ({ id, title, img, description, createdDate }) => {
  const imgStyle = {
    background: `url(${img}) no-repeat center center`,
    backgroundSize: 'cover'
  }

  return (
    <Link href='/blogs/[id]' as={`/blogs/${id}`} passHref>
      <a className={classnames([styles.container, 'fade-in'])}>
        <ProgressiveImage src={img} ratio={1.5} />
        <div className={styles.content}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>{formatDate(createdDate)}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
