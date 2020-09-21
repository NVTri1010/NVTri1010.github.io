import React from 'react'

import content from 'content'

import { BlogCard, BlogLayout } from 'components'
import styles from './Blogs.module.css'

const BlogsPage = () => {
  return (
    <BlogLayout>
      <div className={styles.container}>
        <h2>All Articles</h2>

        <div className={styles.listWrapper}>
          {content.map(item => {
            return <BlogCard key={item.id} {...item} />
          })}
        </div>
      </div>
    </BlogLayout>
  )
}

export default BlogsPage
